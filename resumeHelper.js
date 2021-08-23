var lastState = ""
var tabState = "commons"

function startResumeHelper(){

    console.log("fucking things up!");
    addResumeView();
    setTimeout(setupResumeForm, 5000);
}

function addResumeView(){

    //move cv form to 50% left
    var myframe = document.getElementById("myframe") || document.getElementById("changed");
    myframe.src = myframe.contentWindow.location.href;
    myframe.style.display = "inline";
    myframe.removeAttribute("style");
    myframe.style.width = "50vw";
    myframe.style.height = "100vh";
    myframe.style.display = "inline-block";
    myframe.setAttribute("scrolling", "yes");
    myframe.removeAttribute("width");
    myframe.setAttribute("id","changed");

    //if elements already exists, delete for no errors
    if(document.getElementById("resumeIframe")){
        document.getElementById("resumeIframe").remove();
    }
    if(document.getElementById("resumeId")){
        document.getElementById("resumeId").remove();
    }
    if(document.getElementById("refresher")){
        document.getElementById("refresher").remove();
    }

    //selector to select cv 1/2/3
    var resumeIdSelector = document.createElement("select");
    resumeIdSelector.id = "resumeId";
    resumeIdSelector.style.display = "block";

    // resumeIdSelector.style.width = "1vw";
    resumeIdSelector.style.height = "28px";
    resumeIdSelector.style.float = "right";
    resumeIdSelector.onchange = () => {
        var resumeId = resumeIdSelector.value;
        resumeFrame.src = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/cvGenerate.jsp?resume_no="+resumeId;
    }
    for(var i of Array(1,2,3)){
        var op = document.createElement("option");
        op.value = i;
        op.text = "Resume "+i;
        resumeIdSelector.appendChild(op);
    }

    //reload CV button
    var reloader = document.createElement("button");
    reloader.textContent = "Refresh CV";
    reloader.id = "reloader";
    reloader.style.float = "right";
    reloader.style.height = "28px";
    reloader.onclick = () => {reloadIframe(resumeFrame);}

    //add reload button and cv selector to breadcrumb row
    document.getElementsByClassName("breadcrumb")[0].insertAdjacentElement('beforeend',reloader);
    document.getElementsByClassName("breadcrumb")[0].insertAdjacentElement('beforeend',resumeIdSelector);

    //resume preview frame to 50% right
    var resumeFrame = document.createElement("iframe");
    resumeFrame.id = "resumeIframe"
    resumeFrame.src = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/cvGenerate.jsp?resume_no=1"
    resumeFrame.style.width = "48vw";
    resumeFrame.style.height = "100vh";
    resumeFrame.style.display = "inline-block";
    resumeFrame.style.float = "right";
    myframe.insertAdjacentElement('afterend',resumeFrame);

}

function reloadIframe(frame) {
    console.log("refreshing frame", frame);
    frame.src = frame.src;
}

function setupResumeForm(){
    var sc = document.createElement("script")
    sc.text = `var itemId = "profTr";
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
                
            ],
            "xpaths": [
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
                
            ],
            "xpaths": [
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
    
            ],
            "xpaths": [
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
    
        if(confirm("We need to make changes to individual cv visibility of blocks. Continue?")){
            var blocks = document.querySelectorAll(\`[id=\${itemId}]\`);
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
                document.getElementById(\`\${i+6}resume1\`).value = "Y";
                document.getElementById(\`\${i+6}resume2\`).value = "N";
                document.getElementById(\`\${i+6}resume3\`).value = "N";
    
                document.getElementById(\`\${i+16}resume1\`).value = "N";
                document.getElementById(\`\${i+16}resume2\`).value = "Y";
                document.getElementById(\`\${i+16}resume3\`).value = "N";
    
                document.getElementById(\`\${i+26}resume1\`).value = "N";
                document.getElementById(\`\${i+26}resume2\`).value = "N";
                document.getElementById(\`\${i+26}resume3\`).value = "Y";
            }
            for(var i = 31; i <= 50; i++){
                document.getElementById(\`\${i+6}resume1\`).value = "N";
                document.getElementById(\`\${i+6}resume2\`).value = "N";
                document.getElementById(\`\${i+6}resume3\`).value = "N";
            }
        }
    
    }
    
    function handleTabChange(){
        tabState = document.querySelector('input[name="tab"]:checked').value
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
                document.getElementById(elem).style.display = show;
            }
            for(var elem of tabMap[t].xpaths){
                getElementByXpath(elem).style.display = show;
            }
        }
        var show = "block";
        for(var elem of tabMap[tabState].ids){
            document.getElementById(elem).style.display = show;
        }
        for(var elem of tabMap[tabState].xpaths){
            getElementByXpath(elem).style.display = show;
        }
    
        for(var t in allotedBlocks) {
            var show = "none";
            if(t === tabState){
                show = "block";
            }
            for(var elem of allotedBlocks[t]){
                elem.style.display = show;
            }
        }
        getElementByXpath("/html/body/div/form/table").removeAttribute("style");
    
    }
    
    function addResumeTabs(){

        var css = document.createElement("style");
        css.textContent = \`
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
        \`
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
    
    initResumeForm();
    addResumeTabs();`
    document.getElementById("changed").contentDocument.body.insertAdjacentElement('afterbegin',sc);
}