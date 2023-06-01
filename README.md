# testing env-cmd

1. use node 14 and npm 6. 

I have 

```powershell
node --version; npm --version
v14.21.3
6.14.18
```

2. duplicate the env.dev.sample and rename your new file to `.env.dev`

3. run `npm install`

ordinarily, you will run `npm run start`. 
however, should you need to use production environment variables to test things, 
you can use `npm start:prod`. 
