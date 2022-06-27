function comparsion(start,end,current,name)
{
    result=true;
    if (start==end)
    result=current!=start?result=false:true;
    else if ((current-start)*(end-current)*(end-start)<0)
        result=false;
    return result;        
}
function checkDate(date_in,result)
{
    if (date_in==null|| date_in=='') return false;    
}
function getAdressFromRegList(list)
{
    
}
Tst_string='Hello, 12345 this is test string';
Test_object={
    '.*Hell.*':'Hello',
    '.*\\d+.*':'Digit'

};
for (key in Test_object)
{
    Log(key+':'+(((new RegExp(key)).test(Tst_string))?Test_object[key]:''));
}