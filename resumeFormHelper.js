var itemId = "profTr";
var tabState = "commons";
var tabMap = {
    "commons": {
        "ids": [
            
        ],
        "xpaths": [
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[1]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[2]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[2]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[4]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[5]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[6]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[1]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[2]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[1]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[2]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[3]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[4]",

        ]
    },
    "cv1": {
        "ids": [
            "showminor1",
            "showmicro1",
            "profTab",
            
        ],
        "xpaths": [
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[4]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[4]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[1]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[2]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[5]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[1]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[2]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[7]"
        ]
    },
    "cv2": {
        "ids": [
            "showminor2",
            "showmicro2",
            "profTab",
            
        ],
        "xpaths": [
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[4]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[1]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[2]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[4]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[5]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[3]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[4]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[7]"
        ]
    },
    "cv3": {
        "ids": [
            "showminor3",
            "showmicro3",
            "profTab",

        ],
        "xpaths": [
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[4]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[3]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[4]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[10]/td[1]",
            "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[10]/td[2]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[5]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[5]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[6]",
            "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[7]",
        ]
    }
}

var allotedBlocks = {
    "cv1": [],
    "cv2": [],
    "cv3": [],
    "extras": [],
}

function initResumeForm(){

    var changeSettings = localStorage.getItem("ERPHelperChangeSettings");
    if(!changeSettings){
        if(confirm("We need to make changes to individual cv visibility of blocks. Continue?")){
            localStorage.setItem("ERPHelperChangeSettings","true");
            changeSettings = true;
        }
    }

    if(changeSettings){
        var blocks = document.querySelectorAll(`[id=${itemId}]`);
        for(var i = 0; i < 10; i++){
            allotedBlocks.cv1.push(blocks[i]);
            allotedBlocks.cv2.push(blocks[10+i]);
            allotedBlocks.cv3.push(blocks[20+i]);
        }
        for(var i = 30; i < 50; i++){
            allotedBlocks.extras.push(blocks[i]);
        }

        for(var j = 0; j < 10; j++){
            var i=j+1;
            document.getElementById(`${i+6}resume1`).value = "Y";
            document.getElementById(`${i+6}resume2`).value = "N";
            document.getElementById(`${i+6}resume3`).value = "N";

            document.getElementById(`${i+16}resume1`).value = "N";
            document.getElementById(`${i+16}resume2`).value = "Y";
            document.getElementById(`${i+16}resume3`).value = "N";

            document.getElementById(`${i+26}resume1`).value = "N";
            document.getElementById(`${i+26}resume2`).value = "N";
            document.getElementById(`${i+26}resume3`).value = "Y";
        }
        for(var i = 31; i <= 50; i++){
            document.getElementById(`${i+6}resume1`).value = "N";
            document.getElementById(`${i+6}resume2`).value = "N";
            document.getElementById(`${i+6}resume3`).value = "N";
        }
        addResumeTabs();

        document.getElementById("saveprdata").addEventListener("click", handleSubmit);
        window.addResumeTabs = addResumeTabs;

    }

}

function handleSubmit() {
    window.parent.handleUpdate();
}

function handleTabChange(){
    tabState = document.querySelector('input[name="tab"]:checked').value
    console.log("tabstate")
    refreshTab();
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function refreshTab(){
    console.log("refreshing tabs with state", tabState);
    for(var t in tabMap) {
        var show = "none";
        for(var elem of tabMap[t].ids){
            console.log(elem)
            document.getElementById(elem).style.display = show;
        }
        for(var elem of tabMap[t].xpaths){
            getElementByXpath(elem).style.display = show;
        }
    }
    var show = "";
    for(var elem of tabMap[tabState].ids){
        document.getElementById(elem).style.display = show;
    }
    for(var elem of tabMap[tabState].xpaths){
        getElementByXpath(elem).style.display = show;
    }

    for(var t in allotedBlocks) {
        var show = "none";
        if(t === tabState){
            show = "";
        }
        for(var elem of allotedBlocks[t]){
            elem.style.display = show;
        }
    }
    getElementByXpath("/html/body/div/form/table").removeAttribute("style");
    beautifyTab();
}

function addResumeTabs(){

    var css = document.createElement("style");
    css.textContent = `
        .stv-radio-tabs-wrapper {
            clear: both;
            display: inline-block;
            width: 100%;
            border-bottom: 1px solid #428bca;
            padding: 0 10px;
            position: relative;
        }

        input.stv-radio-tab {
            position: absolute;
            left: -99999em;
            top: -99999em;
        }
        input.stv-radio-tab + label {
            cursor: pointer;
            float: left;
            border: 1px solid #aaa;
            border-bottom: 0;
            background-color: #fff;
            margin-right: -1px;
            padding: 0.5em 1em;
            position: relative;
        }
        input.stv-radio-tab + label:hover {
            background-color: #eee;
        }
        input.stv-radio-tab:checked + label {
            box-shadow: 0 3px 0 -1px #fff, inset 0 5px 0 -1px #13CD4A;
            background-color: #fff;
            border-color: #428bca;
            z-index: 1;
        }
    `
    document.head.appendChild(css);

    var bar = document.createElement("div");
    bar.style.width = "100%"
    bar.id = "bar";
    bar.className = "stv-radio-tabs-wrapper";

    var c = document.createElement("input");
    c.type = "radio";
    c.value = "commons";
    c.name = "tab";
    c.id = "commons";
    c.onchange = handleTabChange;
    c.checked = true;
    c.className = "stv-radio-tab";
    bar.appendChild(c);
    var l = document.createElement("label");
    l.setAttribute("for", "commons");
    l.textContent = "commons";
    bar.appendChild(l);
    var c = document.createElement("input");
    c.type = "radio";
    c.value = "cv1";
    c.name = "tab";
    c.id = "cv1";
    c.onchange = handleTabChange;
    c.className = "stv-radio-tab";
    bar.appendChild(c);
    var l = document.createElement("label");
    l.setAttribute("for", "cv1");
    l.textContent = "cv1";
    bar.appendChild(l);
    var c = document.createElement("input");
    c.type = "radio";
    c.value = "cv2";
    c.name = "tab";
    c.id = "cv2";
    c.onchange = handleTabChange;
    c.className = "stv-radio-tab";
    bar.appendChild(c);
    var l = document.createElement("label");
    l.setAttribute("for", "cv2");
    l.textContent = "cv2";
    bar.appendChild(l);
    var c = document.createElement("input");
    c.type = "radio";
    c.value = "cv3";
    c.name = "tab";
    c.id = "cv3";
    c.onchange = handleTabChange;
    c.className = "stv-radio-tab";
    bar.appendChild(c);
    var l = document.createElement("label");
    l.setAttribute("for", "cv3");
    l.textContent = "cv3";
    bar.appendChild(l);

    if(document.getElementById("bar"))
        document.getElementById("bar").remove();
    document.getElementById("from2_stu").insertAdjacentElement('afterbegin', bar);

    refreshTab();

}

function beautifyTab() {
    
    console.log("beautifying for", tabState);
    if(tabState == "commons")
        beautifyCommons();
    if(tabState == "cv1")
        beautifyCV1();
    if(tabState == "cv2")
        beautifyCV2();
    if(tabState == "cv3")
        beautifyCV3();
}

function temp(x){
    x.setAttribute("style","display:flex;justify-content:space-between")
    var td = x.getElementsByTagName("td")
    td[0].setAttribute("style","width:110px;text-align:left")
    td[1].setAttribute("style","width:230px")
    td[2].setAttribute("style","width:110px;text-align:left")
    td[3].setAttribute("style","width:230px")
}

function beautifyCommons() {
    var table = document.getElementById("tab1")
    var tbody = table.getElementsByTagName("tbody")[0]
    var tr = tbody.getElementsByTagName("tr")
    // console.log(tr)
    tr[0].setAttribute("style","display:flex;justify-content:space-around;padding:15px")
    var td1 = tr[0].getElementsByTagName("td")
    td1[2].setAttribute("style","display:none")
    td1[3].setAttribute("style","display:none")

    for( var j=1;j<=5;j++){
        temp(tr[j])
    }   
    for(var j =6;j<=9;j++){
        tr[j].style.display="flex"
        tr[j].style.textAlign="center"
        tr[j].style.padding="5px"
        var te = tr[j].getElementsByTagName("td")
        for(var i=0;i<4;i+=2){
            te[i].style.width="200px"
            te[i].style.textAlign="center"
        }   
    } 
}

function beautifyCV1() {
    var table = document.getElementById("tab1")
    var tbody = table.getElementsByTagName("tbody")[0]
    var tr = tbody.getElementsByTagName("tr")[0]
    var td = tr.getElementsByTagName("td")
    console.log(td)

    var elms = document.querySelectorAll("[id='profTr']");
    for(var i=0;i<=9;i++){
        var td = elms[i].getElementsByTagName("td")
        td[4].style.display = "none";
        td[5].style.display = "none";
        td[6].style.display = "none";
    }
    table = document.getElementById("profTab")
    tbody = table.getElementsByTagName("tbody")[0]
    tr = tbody.getElementsByTagName("tr")[0]
    var th = tr.getElementsByTagName("th")
    th[4].style.display = "none";
    th[5].style.display = "none";
    th[6].style.display = "none";
}

function beautifyCV2() {
    var table = document.getElementById("tab1")
    var tbody = table.getElementsByTagName("tbody")[0]
    var tr = tbody.getElementsByTagName("tr")[0]
    var td = tr.getElementsByTagName("td")
    var elms = document.querySelectorAll("[id='profTr']");
    for(var i=10;i<=22;i++){
        var td = elms[i].getElementsByTagName("td")
        td[4].style.display = "none";
        td[5].style.display = "none";
        td[6].style.display = "none";
    }
}

function beautifyCV3() {
    var table = document.getElementById("tab1")
    var tbody = table.getElementsByTagName("tbody")[0]
    var tr = tbody.getElementsByTagName("tr")[0]
    var td = tr.getElementsByTagName("td")
    var elms = document.querySelectorAll("[id='profTr']");
    for(var i=21;i<=31;i++){
        var td = elms[i].getElementsByTagName("td")
        td[4].style.display = "none";
        td[5].style.display = "none";
        td[6].style.display = "none";
    }
}

initResumeForm();
