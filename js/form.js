$(document).ready(function()
{
   $("#sub").click(function()
   {
            
            var data={
                name:$("#name").val(),
                birthday:$("#birthday").val(),
                mobile:$("#mobile").val(),
                em:$("#em").val()
            }
            console.log(data);
                 $.ajax({ 
           url: 'http://localhost:3000/addcontact',
           type: 'POST',
           cache: false, 
           data:data,
           success: function(data){
              alert(data.data);
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        });
        $("#myform").trigger('reset');
   });
});