function get(ID){
    return document.getElementById(ID);
}
function calculateDiff(){
    var FromYear  = get('FromYear').value;
    var FromMonth = get('FromMonth').value;
    var FromDay   = get('FromDay').value;
    var ToYear 	  = get('ToYear').value;
    var ToMonth   = get('ToMonth').value;
    var ToDay 	  = get('ToDay').value;
      
    var date1 = new Date(FromYear,FromMonth,FromDay);
    var date2 = new Date(ToYear,ToMonth,ToDay);         
    var diff  = new Date(date2.getTime() - date1.getTime());
    
    get('ResultYear').value  = diff.getUTCFullYear()-1970;  
    get('ResultMonth').value = diff.getUTCMonth();      
    get('ResultDay').value   = diff.getUTCDate()-1;     
}
  
calculateDiff();
  
var calculate = get('calculate');
  
calculate.onclick = function(){
    calculateDiff();
}