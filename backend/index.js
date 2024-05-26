const PORT=5000;
const express= require("express");
const app=express();
const mongoose= require("mongoose");
const jwt= require("jsonwebtoken");
const multer= require("multer");
const path=require("path");
const cors=require("cors");
const { Console } = require("console");
const authMiddleware = require("./middlewares/authMiddleware");

app.use(express.json());
app.use(cors());

//database connectin with mogodb
mongoose.connect("mongodb+srv://jerald_raphel:raphel007@cluster0.iiysasz.mongodb.net/e-commerce")

//API CREATION

app.get("/",(req,res)=>{
  res.send("express app is running")
})

// image storage engine

const storage= multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

//creating upload endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
      res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
      })
  })

// schema for creting products

const Product = mongoose.model("Product",{
    id:{
      type:Number,
      required:true,
    },
    name:{
      type:String,
      required:true,
    },
    image:{
      type:String,
      required:true,
    },
    category:{
      type:String,
      required:true,
    },
    new_price:{
      type:Number,
      required:true,
    },
    old_price:{
      type:Number,
      required:true,
    },
    date:{
      type:Date,
      default:Date.now,
    },
    avilable:{
      type:Boolean,
      default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
  let products= await Product.find({});
  let id;
  if(products.length>0)
  {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  else{
    id=1;
  }
  const product = new Product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
  });
  console.log("product");
  await product.save();
  console.log("Saved")
  res.json({
    success:true,
    name:req.body.name,
  })
  


})


//creating api for deleting product

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
      success:true,
      name:req.body.name
    })
})

//creating api for getting all products
app.get('/allproducts',async (req,res)=>{
    let products= await Product.find({});
    console.log("all products fetched");
    res.send(products);
})

//shema ctreating for user model

const Users= mongoose.model('Users',{
  name:{
    type:String,

  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,

  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

//creating endpoint for registering user
app.post('/signup',async(req,res)=>{
  
  let check = await Users.findOne({email:req.body.email});
  if(check){
     return res.status(400).json({success:false,errors:"exixting user found with the same email address"})
  }
  let cart ={};
    for (let i = 0; i < 72; i++) {
     cart[i]=0;
      
    }
    const user= new Users({
      name:req.body.username,
      email:req.body.email,
      password:req.body.password,
      cartData:cart,
    })
    await user.save();

    const data={
      user:{
        id:user.id
      }
    }

    const token =jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
  
})

//creating endpoint for user login

app.post('/login',async(req,res)=>{
  let user= await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password=== user.password;
    if(passCompare){
       const data={
        user:{
          id:user.id
        }
       }
       const token = jwt.sign(data,'secret_ecom');
       res.json({success:true,token});
    }
    else{
      res.json({success:false,errors:"Wrong password!"});
    }
  }
  else{
    res.json({success:false,errors:"Wrong Email id!"})
  }
})

//creating  end point for newcollection data

// app.get('/newcollection',async(req,res)=>{
//    let products=await product.find({});
//    let newcollection = products.slice(1).slice(-8);
//    console.log("NewCollection fetched");
//    res.send(newcollection);
// })


//popular in women 


// app.get('/popularinwomen',async(req,res)=>{
//   let products=await product.find({category:"women"});
//   let popular_in_women = products.slice(0,4);
//   console.log("popular in women fetched");
//   res.send(popular_in_women);
// })



//creating middleware tofetch user

const fetchUser = async(req,res,next)=>{
  const token = req.header("auth-token");
  if(!token){
    res.status(401).send({errors:"please authenticate using valid token"})
  }
  else{
    try{
         const data= jwt.verify(token,'secret_ecom');
         req.user = data.user;
         next();
    }catch(error){
       res.status(401).send({errors:"please authenticate using the valid token"})
    }
  }
}


// creating endpoint  for adding product in cart


app.post('/addtocart',fetchUser,async (req,res)=>{
  console.log("added",req.body.itemId);
  //  console.log(req.body,req.user);
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("added")
})

//creating end point to remove product from card data


app.post('/removefromcart',fetchUser,async(req,res)=>{
  console.log("removed",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  if( userData.cartData[req.body.itemId]>0)
  userData.cartData[req.body.itemId]-=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("removed")
})

//creating endpiont to get cartdata


app.post('/getcart',fetchUser,async(req,res)=>{
  console.log("getcartdata");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})


app.listen(PORT,(error)=>{
  if(!error){
     console.log("server runnning on port"+PORT)
  }
  else
  {
    console.log("ERROE"+error)
  }
})

//get logged in user

app.get("/get-logged-in-user",authMiddleware,async(req,res)=>{
try {
  const user= await user.findOne({_id: req.body.userId});

  // remover  the password from the user object

  user.password= undefined;
  res.send({
    success:true,
    data:user,
    message:"user fetched successfully",
  })
} catch (error) {
  res.send({
    success:false,
    message:error.message,
  })
}
})
