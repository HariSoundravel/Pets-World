

   	const form = document.getElementBYId("form");
   	const username = document.getElementBYId("username");
    const email = document.getElementBYId("email");
  	const password = document.getElementBYId("password");
    const password1 = document.getElementBYId("password1");
 
     form.addEventListener('submit',e=>
       {
       	  e.preventDefult();
       	  checkInput();
       } 
      function checkInput()
       {
         const usernamevalue= username.value.trim();
         const emailvalue= email.value .trim();
         const passwordvalue= password.value.trim();
        const password1value= password1.value.trim();
       
         if(usernamevalue === '')
           {
            setError(username,'Username Cannot Be Blank');
           }
           else
           {
            setSuccess(username);
           }
         if(emailvalue === '')
           {
            setError(email,'Email Cannot Be Block')
           }
           else
           {
            setSuccess(email);
           }
       }

