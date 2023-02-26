const express = require('express');

const app = express();




app.get("/stickers",(req,res)=>{
    res.json({
            "android_play_store_link": "",
            "ios_app_store_link": "",
            "sticker_packs": [
              {
                "identifier": "1",
                "name": "Testing1",
                "publisher": "Tester",
                "tray_image_file": "happy.webp",
                "image_data_version": "1",
                "avoid_cache": false,
                "publisher_email": "",
                "publisher_website": "",
                "privacy_policy_website": "",
                "license_agreement_website": "",
                "animated_sticker_pack": false,
                "stickers": [
                  {
                    "image_file": "cup1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  {
                    "image_file": "cup2.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  
                
                
                ]
              },
          
              {
                "identifier": "2",
                "name": "Testing2",
                "publisher": "Tester",
                "tray_image_file": "happy.webp",
                "image_data_version": "1",
                "avoid_cache": false,
                "publisher_email": "",
                "publisher_website": "",
                "privacy_policy_website": "",
                "license_agreement_website": "",
                "animated_sticker_pack": false,
                "stickers": [
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  
                  
                ]
              },

              {
                "identifier": "3",
                "name": "Testing2",
                "publisher": "Tester",
                "tray_image_file": "happy.webp",
                "image_data_version": "1",
                "avoid_cache": false,
                "publisher_email": "",
                "publisher_website": "",
                "privacy_policy_website": "",
                "license_agreement_website": "",
                "animated_sticker_pack": false,
                "stickers": [
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  {
                    "image_file": "happy1.webp",
                    "emojis": [
                      "🥰",
                      "😘",
                      "❤️"
                    ]
                  },
                  
                  
                ]
              },
              
            ]
          }
          
    )
})

app.get("/files",(req,res) => {
    res.status(201).json(
      [
        {file_name:"cup1.webp",
        file_url:"https://firebasestorage.googleapis.com/v0/b/napp-85c0c.appspot.com/o/cup1.webp?alt=media&token=3812acde-ba59-4202-8c8f-7428bdb46975"},
        {file_name:"cup2.webp",
        file_url:"https://firebasestorage.googleapis.com/v0/b/napp-85c0c.appspot.com/o/cup2.webp?alt=media&token=51344e1e-d428-47b3-b33d-c322b5f3ca79"},
        {file_name:"happy1.webp",
        file_url:"https://firebasestorage.googleapis.com/v0/b/napp-85c0c.appspot.com/o/happy1.webp?alt=media&token=9daeffdb-4901-4569-b8f4-e3574927f502"},
        {
          file_name:"happy.webp",
          file_url:"https://firebasestorage.googleapis.com/v0/b/napp-85c0c.appspot.com/o/happy.webp?alt=media&token=25a043d6-b29d-4c5b-9818-87a4f7585f0a"
        }
      ]
    )
})

app.listen("3000","192.168.29.41",()=>{
    console.log("Server Started");
})