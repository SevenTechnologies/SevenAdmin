
var db=new PouchDB('billForm');


  var res=window.document.final_private_form.bill_select_id.value;
  var result=window.document.final_private_form.bill_id.value;

  var bill={
    _id:result,
    res:res
  };

  db.put(bill,function(doc,error){
    console.log(bill);
    if(!error){
      //document.getElementById("message").innerHTML="added";

    }
  });
  //document.getElementById("reinspection").disabled = false;

  //}