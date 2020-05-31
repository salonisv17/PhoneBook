$(document).ready(function()
{
    var content="";
    var c="";
    var d="";
        content="<table class='table table-bordered table-hover'><th>Name</th><th>Date of Birth</th><th>Contact Info</th><th>Email</th><th></th>";
                         $.ajax({ 
           url: 'http://localhost:3000/getAllContact',
           type: 'GET',
           cache: false, 
           success: function(data){
             
                if(data.data.length==0)
                {
                    var content1="<center><h2 class='text-danger'>Sorry No Contact Found</h2></center>";
                    $("#page-wrapper").html(content1);
                    return;
                }
                else
                {
                    var data=data.data;
                    console.log(data);
                    
                    for(var i=0;i<data.length;i++)
                    {
                        c="";
                        d="";
                        c+="<ul style='list-style-type:none;'>";
                        d+="<ul style='list-style-type:none;'>";
                        for(var j in data[i].contacts)
                        {
                            c=c+"<li>"+data[i].contacts[j]+"</li>";
                        }
                        c=c+"</ul>";
                        for(var j in data[i].emails)
                        {
                            d=d+"<li>"+data[i].emails[j]+"</li>";
                        }
                        d=d+"</ul>";
                    content+="<tr><td>"+data[i].name+"</td><td>"+data[i].dob.substring(0,10)+"</td><td>"+c+"</td><td>"+d+"</td><td><button onclick='del(this)' class='btn btn-danger'>Delete Contact</button></td>";
                    }
                    content+="</table>";
                    $("#page-wrapper").html("");
                    $("#page-wrapper").html(content);
                }
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }   
    });
});
function del(elm)
{
var a=$(elm).closest("tr").find("td:first-child").text();
     $.ajax({ 
           url: 'http://localhost:3000/delcontact',
           type: 'POST',
           cache: false, 
           data:{name:a},
           success: function(data){
              alert(data.message);
              content="";
              c="";
              d="";
        content="<table class='table table-bordered table-hover'><th>Name</th><th>Date of Birth</th><th>Contact Info</th><th>Email</th><th></th>";
                         $.ajax({ 
           url: 'http://localhost:3000/getAllContact',
           type: 'GET',
           cache: false, 
           success: function(data){
             
                if(data.data.length==0)
                {
                    var content1="<center><h2 class='text-danger'>Sorry No Contact Found</h2></center>";
                    $("#page-wrapper").html(content1);
                    return;
                }
                else
                {
                    var data=data.data;
                    console.log(data);
                    
                    for(var i=0;i<data.length;i++)
                    {
                        c="";
                        d="";
                        c+="<ul style='list-style-type:none;'>";
                        d+="<ul style='list-style-type:none;'>";
                        for(var j in data[i].contacts)
                        {
                            c=c+"<li>"+data[i].contacts[j]+"</li>";
                        }
                        c=c+"</ul>";
                        for(var j in data[i].emails)
                        {
                            d=d+"<li>"+data[i].emails[j]+"</li>";
                        }
                        d=d+"</ul>";
                    content+="<tr><td>"+data[i].name+"</td><td>"+data[i].dob.substring(0,10)+"</td><td>"+c+"</td><td>"+d+"</td><td><button onclick='del(this)' class='btn btn-danger'>Delete Contact</button></td>";
                    }
                    content+="</table>";
                    $("#page-wrapper").html("");
                    $("#page-wrapper").html(content);
                }
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }   
    });
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        });
}