# Firebase Database ID Information

## 🎯 What is a Firebase Database ID?

Your Firebase **Database ID** is the unique identifier for your Realtime Database. It's part of your database URL.

## 📋 Database ID Format:

```
YOUR-PROJECT-NAME-default-rtdb
```

## 🌐 Complete Database URL Format:

```
https://YOUR-PROJECT-NAME-default-rtdb.firebaseio.com
```

Or with region:
```
https://YOUR-PROJECT-NAME-default-rtdb.REGION.firebasedatabase.app
```

## 📍 Where to Find Your Database ID:

1. **Firebase Console** → **Realtime Database**
2. Look at the URL bar or the database reference at the top
3. Your database ID is shown there

## 💡 Examples:

| Project Name | Database ID | Full Database URL |
|-------------|-------------|-------------------|
| `hummlove-store` | `hummlove-store-default-rtdb` | `https://hummlove-store-default-rtdb.firebaseio.com` |
| `hummlove-ecommerce` | `hummlove-ecommerce-default-rtdb` | `https://hummlove-ecommerce-default-rtdb.firebaseio.com` |
| `my-shop-2024` | `my-shop-2024-default-rtdb` | `https://my-shop-2024-default-rtdb.firebaseio.com` |

## 🔧 For Your Project:

When you create your Firebase project, you'll choose a **Project ID**. 

**Your Database ID will be:**
```
[YOUR-PROJECT-ID]-default-rtdb
```

**Your Database URL will be:**
```
https://[YOUR-PROJECT-ID]-default-rtdb.firebaseio.com
```

## ✅ What You Need to Do:

1. **Create Firebase Project** → Choose a unique project ID
2. **Enable Realtime Database** → It auto-generates the database ID
3. **Copy Database URL** → Use it in the `databaseURL` field of your config

## 📝 Configuration Example:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "hummlove-ecommerce.firebaseapp.com",
    databaseURL: "https://hummlove-ecommerce-default-rtdb.firebaseio.com",  // ← This is your Database URL
    projectId: "hummlove-ecommerce",                                         // ← This is your Project ID
    storageBucket: "hummlove-ecommerce.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456"
};
```

## 🚨 Important Notes:

- You **cannot** manually choose the database ID
- It's **automatically generated** when you create the Realtime Database
- Format is always: `[project-id]-default-rtdb`
- The database ID is **NOT** the same as your project ID (it has `-default-rtdb` suffix)

## 🎯 To Get Started:

1. Go to: https://console.firebase.google.com/
2. Create a new project
3. Enable Realtime Database
4. Your database URL will be displayed immediately
5. Copy it and paste it into `index.html`

---

**That's it! Your database ID is generated automatically by Firebase when you create the database.** 🎉
