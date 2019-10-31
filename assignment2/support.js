
function savedata() {
    var SrNo = document.getElementById("SrNo").value;
    var Name = document.getElementById("Name").value;

    var StartDate = document.getElementById("StartDate").value;
    var startDateData = new Date(StartDate);
    var EndDate = document.getElementById("EndDate").value;
    var endDateData = new Date(EndDate);
    var Amount = document.getElementById("Amount").value;

    console.log(SrNo);
    console.log(Name);
    console.log(startDateData.getMonth());

    console.log(startDateData.getFullYear());
    console.log(endDateData.getMonth());
    console.log(EndDate);
    console.log(Amount);

    var data=[SrNo,StartDate,EndDate,Amount];

    var tableRef = document.getElementById("tab1");
    //var yearDiff=startDateData.getFullYear()-endDateData.getFullYear();
    const diffTime = Math.abs(startDateData.getTime() - endDateData.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    var noOfMonth = Math.floor(diffDays/30);
    console.log(noOfMonth);
    var total=0;
    for (var i = 0; i < noOfMonth; i++) {
        var newRow = tableRef.insertRow(-1);
        for (var j = 0; j < 4; j++) {
            var tabCell = newRow.insertCell(-1);
            switch(j){
                case 0:
                    tabCell.innerHTML =SrNo;
                    SrNo++;
                break;
                case 1:
                    tabCell.innerHTML =startDateData.toISOString().slice(0,10);
                    startDateData.setMonth(startDateData.getMonth() + 1);
                break;
                case 2:
                    tabCell.innerHTML =startDateData.toISOString().slice(0,10);
                break;
                case 3:tabCell.innerHTML =Amount;
                    total+=Number(Amount);
                break;
            }

            

        }
    }
    //tabCell.innerHTML ="";
    var ta = document.getElementById("par");
    ta.innerHTML="The total amount is :"+total;
    
}