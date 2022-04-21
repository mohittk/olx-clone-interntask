const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Item = require("../models/Item");

router.post("/signup", async (req, res) => {
  let { user_email, user_name, user_password, user_mobilenumber } = req.body;

  const result = await User.findOne({ user_email });

  if(result){
      return res.json({ message: 'User already registered'});
  }
  else{
      var hash = bcrypt.hashSync(user_password, 8);
      user_password = hash;

      const user = new User({
          user_email, user_name, user_password, user_mobilenumber
      })

      user.save(function(error, document){
          if(error){
              console.log(error);
              return res.json({ "message" : "please try again", "tag" : false})
          }

          return res.json({ "message" : 'Applicant Signup success', "tag": true })
      })
  }
});


router.post('/login', async(req,res)=>{
    const obj = req.body;
    const result = await User.findOne({user_email : obj.user_email}) 

    if(result){
        bcrypt.compare(req.body.user_password, result.user_password, function(err, hashed){
            if(hashed == true){
                const token = jwt.sign({ id: result._id}, 'olx_clone');
                return res.json({ 'message' : 'login success', 'token': token, 'tag' : true})

            }
            else{
                return res.json({ 'message' : 'login failed', 'tag' : false})
            }
        });
    }

    else{
        return res.json({ 'message' : 'login failed', 'tag' : false})
    }
})


router.post('/auth', async(req, res) => {
    const token = req.body.token;
    try{
        const decoded = jwt.verify(token, 'olx_clone');
        const user = User.findOne({_id: decoded.id});
        return res.json({ 'message' : "authenticated user", "tag" : true});
    }
    catch(err){
        console.error(err);
        return res.json({ 'message' : "not authenticated User", "tag": false});
    }
})


router.post('/itempost', async (req, res) => {
    let {
        item_name, item_price, item_status
    } = req.body;

    const itempost = new Item({
        item_name, item_price, item_status
    })

    itempost.save(function (err, document){
        if(err) {
            console.error(err);
            return res.json({ 'message' : "try again", "tag" : false})
        }
        return res.json({ 'message' : "Job posted successfully", "tag" : true})
    })
})

router.post('/allitems', async (req, res)=>{

    let itemsPosted = await Item.find();
    if(itemsPosted.length > 0){
        let obj = itemsPosted;
        return res.json({"tag": true, "message" : obj});
    }

    return res.json({"tag" : false, "message" : "no items here"})

})


module.exports = router;