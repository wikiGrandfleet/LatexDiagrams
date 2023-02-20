(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4622],{15509:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DSP/a5_4c",function(){return i(65583)}])},97135:function(e,a,i){"use strict";i.d(a,{t:function(){return n}});var r=i(85893);i(67294);let n=e=>{let{texFilePath:a,buttonText:i="Deploy to Overleaf",buttonStyle:n={display:"inline-block",backgroundColor:"green",color:"white",padding:"8px 16px",borderRadius:"4px",textDecoration:"none",fontSize:"16px",textAlign:"center"}}=e;return(0,r.jsx)("a",{href:"https://www.overleaf.com/docs?snip_uri=".concat(a),target:"\\_blank",style:n,children:i})}},73957:function(e,a,i){"use strict";var r=i(85893);i(67294);let n={logo:(0,r.jsx)("span",{children:"Latex Diagrams"}),project:{link:"https://github.com/FriendlyUser/LatexDiagrams"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/FriendlyUser/LatexDiagrams",footer:{text:"Nextra Docs Template"}};a.Z=n},65583:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return g.Z}});var r=i(85893),n=i(58808),t=i(61235),o=i(73957);i(41098),i(15513);var s=i(11151),l=i(25675),c=i.n(l),d={src:"/latex-diagrams-docs/_next/static/media/a5_4c.0bc51f87.png",height:765,width:1007,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEUBAQEAAADr5yS/AAAAAnRSTlMBCGFTdEsAAAAJcEhZcwAEk+AABJPgAYgCDW8AAAAYSURBVHicY2BgZIACCAOZy8jAiCYLZQAAAS0ACmUYYJAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},m=i(97135),g=i(32243);function u(e){let a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{children:"Description"}),"\n",(0,r.jsx)(a.p,{children:"The code is a LaTeX document that includes a tikzpicture environment to create a plot of a discrete-time signal. The signal values are defined in the file data.dat using two columns: one for the index n and another for the signal value hn. The tikzpicture environment includes an axis environment that defines the x and y axes, their labels, and some other properties such as the tick marks and the y-axis limits. Finally, the signal is plotted using the addplot command with the ycomb option to create a stem plot, and the data is loaded from the file data.dat using the table command with the x and y columns specified."}),"\n",(0,r.jsx)(a.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(a.p,{children:"tikz, pgfplots, filecontents, amsmath, axis, ycomb, table, xtick, xlabel, ylabel, ymin, ymax, n, hn."}),"\n",(0,r.jsx)(a.h2,{id:"source-code",children:"Source Code"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(c(),{alt:"DSP",placeholder:"blur",src:d})}),"\n",(0,r.jsx)(a.pre,{"data-language":"tex","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(a.code,{"data-language":"tex","data-theme":"default",children:[(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\documentclass"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"[border={10pt}]{standalone}"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\usepackage"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{tikz,pgfplots,filecontents,amsmath}"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\pgfplotsset"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{compat=1.5}"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\begin"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{filecontents}{data.dat}"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" n   hn "})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" 0   2  "})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" 1   -3  "})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" 2   2.0  "})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-comment)"},children:"% 3   0.0 "})}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-comment)"},children:"%4   0.0 "})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-comment)"},children:"% 5   0.0"})}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\end"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{filecontents}"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:" "}),"\n",(0,r.jsx)(a.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\begin"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{document}"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\begin"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{tikzpicture}"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\begin"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{axis}"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-comment)"},children:"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    axis x line=middle,"})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    axis y line=middle,"})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    every axis x label={at={(current axis.right of origin)},anchor=north west},"})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    every axis y label={at={(current axis.above origin)},anchor= north west},"})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    every axis plot post/.style={mark options={fill=black}},"})}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    xlabel={"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"$"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"n"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"$"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    ylabel={"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"$"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"\\boldsymbol{h[n]}"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-constant)"},children:"$"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    xtick={-1,0,2,4},"})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    ymin=-3,"})}),"\n",(0,r.jsx)(a.span,{className:"line",children:(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    ymax=3,"})}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-comment)"},children:"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\addplot"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"+[ycomb,black,thick] table [x={n}, y={hn}] {data.dat};"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\end"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{axis}"})]}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\end"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{tikzpicture}"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(a.span,{className:"line",children:[(0,r.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"\\end"}),(0,r.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{document}"})]}),"\n",(0,r.jsx)(a.span,{className:"line",children:" "})]})}),"\n",(0,r.jsx)(m.t,{texFilePath:"https://raw.githubusercontent.com/FriendlyUser/LatexDiagrams/master/DSP/a5_4c.tex"})]})}e=i.hmd(e),(0,n.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)},nextraLayout:t.ZP,hot:e.hot,pageOpts:{filePath:"pages/DSP/a5_4c.mdx",route:"/DSP/a5_4c",frontMatter:{},pageMap:[{kind:"Folder",name:"AlgDS",route:"/AlgDS",children:[{kind:"MdxPage",name:"DS",route:"/AlgDS/DS"},{kind:"Meta",data:{DS:"Ds"}}]},{kind:"Folder",name:"ArtificialIntelligence",route:"/ArtificialIntelligence",children:[{kind:"MdxPage",name:"can_mis",route:"/ArtificialIntelligence/can_mis"},{kind:"MdxPage",name:"crossover",route:"/ArtificialIntelligence/crossover"},{kind:"MdxPage",name:"feature_selection",route:"/ArtificialIntelligence/feature_selection"},{kind:"MdxPage",name:"ga",route:"/ArtificialIntelligence/ga"},{kind:"MdxPage",name:"genetic_crossover",route:"/ArtificialIntelligence/genetic_crossover"},{kind:"MdxPage",name:"tictactoe",route:"/ArtificialIntelligence/tictactoe"},{kind:"Meta",data:{can_mis:"Can Mis",crossover:"Crossover",feature_selection:"Feature Selection",ga:"Ga",genetic_crossover:"Genetic Crossover",tictactoe:"Tictactoe"}}]},{kind:"Folder",name:"BlogDiagrams",route:"/BlogDiagrams",children:[{kind:"MdxPage",name:"buildingDapp",route:"/BlogDiagrams/buildingDapp"},{kind:"MdxPage",name:"chat-decision-tree",route:"/BlogDiagrams/chat-decision-tree"},{kind:"MdxPage",name:"ciComparsionTable",route:"/BlogDiagrams/ciComparsionTable"},{kind:"MdxPage",name:"circle-ci-pipeline",route:"/BlogDiagrams/circle-ci-pipeline"},{kind:"MdxPage",name:"circleDia",route:"/BlogDiagrams/circleDia"},{kind:"MdxPage",name:"discordDiagram",route:"/BlogDiagrams/discordDiagram"},{kind:"MdxPage",name:"folderSetup",route:"/BlogDiagrams/folderSetup"},{kind:"MdxPage",name:"genericTcolorTable",route:"/BlogDiagrams/genericTcolorTable"},{kind:"MdxPage",name:"ipfs-dapp",route:"/BlogDiagrams/ipfs-dapp"},{kind:"MdxPage",name:"latex_user_sw_levels",route:"/BlogDiagrams/latex_user_sw_levels"},{kind:"MdxPage",name:"osiModel",route:"/BlogDiagrams/osiModel"},{kind:"MdxPage",name:"redmineOrg",route:"/BlogDiagrams/redmineOrg"},{kind:"MdxPage",name:"tech-stack",route:"/BlogDiagrams/tech-stack"},{kind:"MdxPage",name:"webApp",route:"/BlogDiagrams/webApp"},{kind:"Meta",data:{buildingDapp:"Buildingdapp","chat-decision-tree":"Chat Decision Tree",ciComparsionTable:"Cicomparsiontable","circle-ci-pipeline":"Circle CI Pipeline",circleDia:"Circledia",discordDiagram:"Discorddiagram",folderSetup:"Foldersetup",genericTcolorTable:"Generictcolortable","ipfs-dapp":"Ipfs Dapp",latex_user_sw_levels:"Latex User Sw Levels",osiModel:"Osimodel",redmineOrg:"Redmineorg","tech-stack":"Tech Stack",webApp:"Webapp"}}]},{kind:"Folder",name:"Circuits",route:"/Circuits",children:[{kind:"MdxPage",name:"2ASources",route:"/Circuits/2ASources"},{kind:"MdxPage",name:"CircuitB",route:"/Circuits/CircuitB"},{kind:"MdxPage",name:"CircuitE300N1",route:"/Circuits/CircuitE300N1"},{kind:"MdxPage",name:"FirstOrderSystem",route:"/Circuits/FirstOrderSystem"},{kind:"MdxPage",name:"LagCompensation",route:"/Circuits/LagCompensation"},{kind:"MdxPage",name:"NodeAnalysis",route:"/Circuits/NodeAnalysis"},{kind:"MdxPage",name:"ProportionalDeriviateControl",route:"/Circuits/ProportionalDeriviateControl"},{kind:"MdxPage",name:"SuperPosition",route:"/Circuits/SuperPosition"},{kind:"MdxPage",name:"TableOfCircuits",route:"/Circuits/TableOfCircuits"},{kind:"MdxPage",name:"TheveinEquivalent",route:"/Circuits/TheveinEquivalent"},{kind:"MdxPage",name:"TheveinEquvialentSimplified",route:"/Circuits/TheveinEquvialentSimplified"},{kind:"Meta",data:{"2ASources":"2asources",CircuitB:"Circuitb",CircuitE300N1:"Circuite300n1",FirstOrderSystem:"Firstordersystem",LagCompensation:"Lagcompensation",NodeAnalysis:"Nodeanalysis",ProportionalDeriviateControl:"Proportionalderiviatecontrol",SuperPosition:"Superposition",TableOfCircuits:"Tableofcircuits",TheveinEquivalent:"Theveinequivalent",TheveinEquvialentSimplified:"Theveinequvialentsimplified"}}]},{kind:"Folder",name:"ControlSystems",route:"/ControlSystems",children:[{kind:"Folder",name:"CSI",route:"/ControlSystems/CSI",children:[{kind:"MdxPage",name:"BlockDiagramex2",route:"/ControlSystems/CSI/BlockDiagramex2"},{kind:"MdxPage",name:"Mason",route:"/ControlSystems/CSI/Mason"},{kind:"MdxPage",name:"Q10BlockDiagram",route:"/ControlSystems/CSI/Q10BlockDiagram"},{kind:"MdxPage",name:"Q1Diagram67",route:"/ControlSystems/CSI/Q1Diagram67"},{kind:"MdxPage",name:"Q2Circuit",route:"/ControlSystems/CSI/Q2Circuit"},{kind:"MdxPage",name:"Q2Diagram614",route:"/ControlSystems/CSI/Q2Diagram614"},{kind:"MdxPage",name:"Q3Circuit",route:"/ControlSystems/CSI/Q3Circuit"},{kind:"MdxPage",name:"Q3Circuit2",route:"/ControlSystems/CSI/Q3Circuit2"},{kind:"MdxPage",name:"Q3Diagram616",route:"/ControlSystems/CSI/Q3Diagram616"},{kind:"MdxPage",name:"Q4Diagram617",route:"/ControlSystems/CSI/Q4Diagram617"},{kind:"MdxPage",name:"Q5BlockDiagram",route:"/ControlSystems/CSI/Q5BlockDiagram"},{kind:"MdxPage",name:"Q5BlockDiagram2-2",route:"/ControlSystems/CSI/Q5BlockDiagram2-2"},{kind:"MdxPage",name:"Q5BlockDiagram2",route:"/ControlSystems/CSI/Q5BlockDiagram2"},{kind:"MdxPage",name:"Q5BlockDiagram3",route:"/ControlSystems/CSI/Q5BlockDiagram3"},{kind:"MdxPage",name:"Q5BlockDiagram4",route:"/ControlSystems/CSI/Q5BlockDiagram4"},{kind:"MdxPage",name:"Q5BlockDiagram5",route:"/ControlSystems/CSI/Q5BlockDiagram5"},{kind:"MdxPage",name:"Q5BlockDiagram6",route:"/ControlSystems/CSI/Q5BlockDiagram6"},{kind:"MdxPage",name:"Q5Diagram620",route:"/ControlSystems/CSI/Q5Diagram620"},{kind:"MdxPage",name:"Q6BLockDiagram2",route:"/ControlSystems/CSI/Q6BLockDiagram2"},{kind:"MdxPage",name:"Q6BLockDiagram3Fin",route:"/ControlSystems/CSI/Q6BLockDiagram3Fin"},{kind:"MdxPage",name:"Q6BlockDiagram",route:"/ControlSystems/CSI/Q6BlockDiagram"},{kind:"MdxPage",name:"Q6BlockDiagram4",route:"/ControlSystems/CSI/Q6BlockDiagram4"},{kind:"MdxPage",name:"Q6BlockDiagram5",route:"/ControlSystems/CSI/Q6BlockDiagram5"},{kind:"MdxPage",name:"Q6BlockDiagram6fin",route:"/ControlSystems/CSI/Q6BlockDiagram6fin"},{kind:"MdxPage",name:"conSys",route:"/ControlSystems/CSI/conSys"},{kind:"MdxPage",name:"ex1",route:"/ControlSystems/CSI/ex1"},{kind:"MdxPage",name:"index",route:"/ControlSystems/CSI"},{kind:"MdxPage",name:"polesZeroes",route:"/ControlSystems/CSI/polesZeroes"},{kind:"MdxPage",name:"timeline",route:"/ControlSystems/CSI/timeline"},{kind:"Meta",data:{BlockDiagramex2:"Blockdiagramex2",conSys:"Consys",ex1:"Ex1",index:"Index",Mason:"Mason",polesZeroes:"Poleszeroes",Q1Diagram67:"Q1diagram67",Q2Circuit:"Q2circuit",Q2Diagram614:"Q2diagram614",Q3Circuit:"Q3circuit",Q3Circuit2:"Q3circuit2",Q3Diagram616:"Q3diagram616",Q4Diagram617:"Q4diagram617",Q5BlockDiagram:"Q5blockdiagram",Q5BlockDiagram2:"Q5blockdiagram2","Q5BlockDiagram2-2":"Q5blockdiagram2 2",Q5BlockDiagram3:"Q5blockdiagram3",Q5BlockDiagram4:"Q5blockdiagram4",Q5BlockDiagram5:"Q5blockdiagram5",Q5BlockDiagram6:"Q5blockdiagram6",Q5Diagram620:"Q5diagram620",Q6BlockDiagram:"Q6blockdiagram",Q6BLockDiagram2:"Q6blockdiagram2",Q6BLockDiagram3Fin:"Q6blockdiagram3fin",Q6BlockDiagram4:"Q6blockdiagram4",Q6BlockDiagram5:"Q6blockdiagram5",Q6BlockDiagram6fin:"Q6blockdiagram6fin",Q10BlockDiagram:"Q10blockdiagram",timeline:"Timeline"}}]},{kind:"Folder",name:"CSII",route:"/ControlSystems/CSII",children:[{kind:"MdxPage",name:"460A3SamplerTesting",route:"/ControlSystems/CSII/460A3SamplerTesting"},{kind:"MdxPage",name:"B4-8",route:"/ControlSystems/CSII/B4-8"},{kind:"MdxPage",name:"B48RLocus",route:"/ControlSystems/CSII/B48RLocus"},{kind:"MdxPage",name:"IntegralControler",route:"/ControlSystems/CSII/IntegralControler"},{kind:"MdxPage",name:"OgataB6-17",route:"/ControlSystems/CSII/OgataB6-17"},{kind:"MdxPage",name:"StraightLinebasicBlock",route:"/ControlSystems/CSII/StraightLinebasicBlock"},{kind:"MdxPage",name:"block410",route:"/ControlSystems/CSII/block410"},{kind:"MdxPage",name:"block412",route:"/ControlSystems/CSII/block412"},{kind:"MdxPage",name:"block415",route:"/ControlSystems/CSII/block415"},{kind:"MdxPage",name:"digitalController",route:"/ControlSystems/CSII/digitalController"},{kind:"MdxPage",name:"digraphs",route:"/ControlSystems/CSII/digraphs"},{kind:"MdxPage",name:"pf",route:"/ControlSystems/CSII/pf"},{kind:"MdxPage",name:"polesZeroes",route:"/ControlSystems/CSII/polesZeroes"},{kind:"MdxPage",name:"sampleEND",route:"/ControlSystems/CSII/sampleEND"},{kind:"MdxPage",name:"sampler413",route:"/ControlSystems/CSII/sampler413"},{kind:"MdxPage",name:"samplerBlock",route:"/ControlSystems/CSII/samplerBlock"},{kind:"MdxPage",name:"samplerTesting",route:"/ControlSystems/CSII/samplerTesting"},{kind:"MdxPage",name:"stepResponsePlot",route:"/ControlSystems/CSII/stepResponsePlot"},{kind:"MdxPage",name:"systemTypes012",route:"/ControlSystems/CSII/systemTypes012"},{kind:"Meta",data:{"460A3SamplerTesting":"460a3samplertesting","B4-8":"B4 8",B48RLocus:"B48rlocus",block410:"Block410",block412:"Block412",block415:"Block415",digitalController:"Digitalcontroller",digraphs:"Digraphs",IntegralControler:"Integralcontroler","OgataB6-17":"Ogatab6 17",pf:"Pf",polesZeroes:"Poleszeroes",sampleEND:"Sampleend",sampler413:"Sampler413",samplerBlock:"Samplerblock",samplerTesting:"Samplertesting",stepResponsePlot:"Stepresponseplot",StraightLinebasicBlock:"Straightlinebasicblock",systemTypes012:"Systemtypes012"}}]}]},{kind:"Folder",name:"DSP",route:"/DSP",children:[{kind:"MdxPage",name:"a511aCopy",route:"/DSP/a511aCopy"},{kind:"MdxPage",name:"a53_b",route:"/DSP/a53_b"},{kind:"MdxPage",name:"a54",route:"/DSP/a54"},{kind:"MdxPage",name:"a5_4c",route:"/DSP/a5_4c"},{kind:"MdxPage",name:"a5a11_a",route:"/DSP/a5a11_a"},{kind:"MdxPage",name:"block",route:"/DSP/block"},{kind:"MdxPage",name:"c514_c",route:"/DSP/c514_c"},{kind:"MdxPage",name:"e514_c2",route:"/DSP/e514_c2"},{kind:"Meta",data:{a5_4c:"A5 4c",a5a11_a:"A5a11 A",a53_b:"A53 B",a54:"A54",a511aCopy:"A511acopy",block:"Block",c514_c:"C514 C",e514_c2:"E514 C2"}}]},{kind:"Folder",name:"DVP",route:"/DVP",children:[{kind:"MdxPage",name:"latex-diagram",route:"/DVP/latex-diagram"},{kind:"MdxPage",name:"lattice-sampling",route:"/DVP/lattice-sampling"},{kind:"MdxPage",name:"lbp",route:"/DVP/lbp"},{kind:"MdxPage",name:"periodically-matrix",route:"/DVP/periodically-matrix"},{kind:"MdxPage",name:"rectangular-wave",route:"/DVP/rectangular-wave"},{kind:"Meta",data:{"latex-diagram":"Latex Diagram","lattice-sampling":"Lattice Sampling",lbp:"Lbp","periodically-matrix":"Periodically Matrix","rectangular-wave":"Rectangular Wave"}}]},{kind:"Folder",name:"ElectroMag",route:"/ElectroMag",children:[{kind:"MdxPage",name:"3DCylinder",route:"/ElectroMag/3DCylinder"},{kind:"MdxPage",name:"BHCurve",route:"/ElectroMag/BHCurve"},{kind:"MdxPage",name:"DEHG",route:"/ElectroMag/DEHG"},{kind:"MdxPage",name:"Exampl1Circuit",route:"/ElectroMag/Exampl1Circuit"},{kind:"MdxPage",name:"Exampl2Circuit",route:"/ElectroMag/Exampl2Circuit"},{kind:"MdxPage",name:"PrimarySide",route:"/ElectroMag/PrimarySide"},{kind:"MdxPage",name:"Q1Circuit",route:"/ElectroMag/Q1Circuit"},{kind:"MdxPage",name:"Q1Circuit2",route:"/ElectroMag/Q1Circuit2"},{kind:"MdxPage",name:"Q2Circuit",route:"/ElectroMag/Q2Circuit"},{kind:"MdxPage",name:"Q3Circuit",route:"/ElectroMag/Q3Circuit"},{kind:"MdxPage",name:"Q3Circuit2",route:"/ElectroMag/Q3Circuit2"},{kind:"MdxPage",name:"Q4Circuit",route:"/ElectroMag/Q4Circuit"},{kind:"MdxPage",name:"Q5Circuit",route:"/ElectroMag/Q5Circuit"},{kind:"MdxPage",name:"Q6Circuit",route:"/ElectroMag/Q6Circuit"},{kind:"MdxPage",name:"Q7Circuit",route:"/ElectroMag/Q7Circuit"},{kind:"MdxPage",name:"Q7Circuit2",route:"/ElectroMag/Q7Circuit2"},{kind:"MdxPage",name:"Q8Circuit",route:"/ElectroMag/Q8Circuit"},{kind:"MdxPage",name:"Transformer3Windings",route:"/ElectroMag/Transformer3Windings"},{kind:"MdxPage",name:"TransmissionLine",route:"/ElectroMag/TransmissionLine"},{kind:"MdxPage",name:"phasor",route:"/ElectroMag/phasor"},{kind:"MdxPage",name:"smithChart",route:"/ElectroMag/smithChart"},{kind:"MdxPage",name:"tikzElecMag",route:"/ElectroMag/tikzElecMag"},{kind:"MdxPage",name:"transformer",route:"/ElectroMag/transformer"},{kind:"Meta",data:{"3DCylinder":"3dcylinder",BHCurve:"Bhcurve",DEHG:"Dehg",Exampl1Circuit:"Exampl1circuit",Exampl2Circuit:"Exampl2circuit",phasor:"Phasor",PrimarySide:"Primaryside",Q1Circuit:"Q1circuit",Q1Circuit2:"Q1circuit2",Q2Circuit:"Q2circuit",Q3Circuit:"Q3circuit",Q3Circuit2:"Q3circuit2",Q4Circuit:"Q4circuit",Q5Circuit:"Q5circuit",Q6Circuit:"Q6circuit",Q7Circuit:"Q7circuit",Q7Circuit2:"Q7circuit2",Q8Circuit:"Q8circuit",smithChart:"Smithchart",tikzElecMag:"Tikzelecmag",transformer:"Transformer",Transformer3Windings:"Transformer3windings",TransmissionLine:"Transmissionline"}}]},{kind:"Folder",name:"EngineeringSoftwareDesign",route:"/EngineeringSoftwareDesign",children:[{kind:"MdxPage",name:"CPUPicture",route:"/EngineeringSoftwareDesign/CPUPicture"},{kind:"MdxPage",name:"Circles",route:"/EngineeringSoftwareDesign/Circles"},{kind:"MdxPage",name:"ClassDiagram",route:"/EngineeringSoftwareDesign/ClassDiagram"},{kind:"MdxPage",name:"ClientServer",route:"/EngineeringSoftwareDesign/ClientServer"},{kind:"MdxPage",name:"DisconnectedFromGame",route:"/EngineeringSoftwareDesign/DisconnectedFromGame"},{kind:"MdxPage",name:"FlowChart",route:"/EngineeringSoftwareDesign/FlowChart"},{kind:"MdxPage",name:"GanttScheduling",route:"/EngineeringSoftwareDesign/GanttScheduling"},{kind:"MdxPage",name:"GitWorkFlow",route:"/EngineeringSoftwareDesign/GitWorkFlow"},{kind:"MdxPage",name:"Matching",route:"/EngineeringSoftwareDesign/Matching"},{kind:"MdxPage",name:"MatchingTable",route:"/EngineeringSoftwareDesign/MatchingTable"},{kind:"MdxPage",name:"QueuePictures",route:"/EngineeringSoftwareDesign/QueuePictures"},{kind:"MdxPage",name:"SeqDia1",route:"/EngineeringSoftwareDesign/SeqDia1"},{kind:"MdxPage",name:"SeqDiagramReport",route:"/EngineeringSoftwareDesign/SeqDiagramReport"},{kind:"MdxPage",name:"SeqGoodExample",route:"/EngineeringSoftwareDesign/SeqGoodExample"},{kind:"MdxPage",name:"Tables",route:"/EngineeringSoftwareDesign/Tables"},{kind:"MdxPage",name:"WBSChart",route:"/EngineeringSoftwareDesign/WBSChart"},{kind:"MdxPage",name:"basicBlock",route:"/EngineeringSoftwareDesign/basicBlock"},{kind:"MdxPage",name:"betterClientServer",route:"/EngineeringSoftwareDesign/betterClientServer"},{kind:"MdxPage",name:"bytefieldCENG356A2",route:"/EngineeringSoftwareDesign/bytefieldCENG356A2"},{kind:"MdxPage",name:"bytefieldTest",route:"/EngineeringSoftwareDesign/bytefieldTest"},{kind:"MdxPage",name:"commandPrompt",route:"/EngineeringSoftwareDesign/commandPrompt"},{kind:"MdxPage",name:"document",route:"/EngineeringSoftwareDesign/document"},{kind:"MdxPage",name:"fileDirectory",route:"/EngineeringSoftwareDesign/fileDirectory"},{kind:"MdxPage",name:"serverClient",route:"/EngineeringSoftwareDesign/serverClient"},{kind:"MdxPage",name:"timeline",route:"/EngineeringSoftwareDesign/timeline"},{kind:"Meta",data:{basicBlock:"Basicblock",betterClientServer:"Betterclientserver",bytefieldCENG356A2:"Bytefieldceng356a2",bytefieldTest:"Bytefieldtest",Circles:"Circles",ClassDiagram:"Classdiagram",ClientServer:"Clientserver",commandPrompt:"Commandprompt",CPUPicture:"Cpupicture",DisconnectedFromGame:"Disconnectedfromgame",document:"Document",fileDirectory:"Filedirectory",FlowChart:"Flowchart",GanttScheduling:"Ganttscheduling",GitWorkFlow:"Gitworkflow",Matching:"Matching",MatchingTable:"Matchingtable",QueuePictures:"Queuepictures",SeqDia1:"Seqdia1",SeqDiagramReport:"Seqdiagramreport",SeqGoodExample:"Seqgoodexample",serverClient:"Serverclient",Tables:"Tables",timeline:"Timeline",WBSChart:"Wbschart"}}]},{kind:"Folder",name:"PCC",route:"/PCC",children:[{kind:"MdxPage",name:"Cube4",route:"/PCC/Cube4"},{kind:"MdxPage",name:"SwitchDiagram",route:"/PCC/SwitchDiagram"},{kind:"MdxPage",name:"crazyDia",route:"/PCC/crazyDia"},{kind:"MdxPage",name:"epos27",route:"/PCC/epos27"},{kind:"MdxPage",name:"epos7",route:"/PCC/epos7"},{kind:"MdxPage",name:"interconnect-diagram",route:"/PCC/interconnect-diagram"},{kind:"MdxPage",name:"omega_flip",route:"/PCC/omega_flip"},{kind:"MdxPage",name:"q4Torus",route:"/PCC/q4Torus"},{kind:"MdxPage",name:"reduc11",route:"/PCC/reduc11"},{kind:"MdxPage",name:"reduc21",route:"/PCC/reduc21"},{kind:"MdxPage",name:"reduc7",route:"/PCC/reduc7"},{kind:"MdxPage",name:"spos27",route:"/PCC/spos27"},{kind:"MdxPage",name:"spos7",route:"/PCC/spos7"},{kind:"MdxPage",name:"subdividedRect",route:"/PCC/subdividedRect"},{kind:"MdxPage",name:"taskChannel",route:"/PCC/taskChannel"},{kind:"MdxPage",name:"tasks310",route:"/PCC/tasks310"},{kind:"MdxPage",name:"tasks312simpler",route:"/PCC/tasks312simpler"},{kind:"Meta",data:{crazyDia:"Crazydia",Cube4:"Cube4",epos7:"Epos7",epos27:"Epos27","interconnect-diagram":"Interconnect Diagram",omega_flip:"Omega Flip",q4Torus:"Q4torus",reduc7:"Reduc7",reduc11:"Reduc11",reduc21:"Reduc21",spos7:"Spos7",spos27:"Spos27",subdividedRect:"Subdividedrect",SwitchDiagram:"Switchdiagram",taskChannel:"Taskchannel",tasks310:"Tasks310",tasks312simpler:"Tasks312simpler"}}]},{kind:"Folder",name:"ReportDiagrams",route:"/ReportDiagrams",children:[{kind:"Folder",name:"ENGR003-004",route:"/ReportDiagrams/ENGR003-004",children:[{kind:"MdxPage",name:"gasCost",route:"/ReportDiagrams/ENGR003-004/gasCost"},{kind:"MdxPage",name:"harvestArchitecture",route:"/ReportDiagrams/ENGR003-004/harvestArchitecture"},{kind:"MdxPage",name:"harvestArchitectureGood",route:"/ReportDiagrams/ENGR003-004/harvestArchitectureGood"},{kind:"MdxPage",name:"requiredFields",route:"/ReportDiagrams/ENGR003-004/requiredFields"},{kind:"Meta",data:{gasCost:"Gascost",harvestArchitecture:"Harvestarchitecture",harvestArchitectureGood:"Harvestarchitecturegood",requiredFields:"Requiredfields"}}]},{kind:"Folder",name:"ENGR446",route:"/ReportDiagrams/ENGR446",children:[{kind:"MdxPage",name:"advancedTimeline",route:"/ReportDiagrams/ENGR446/advancedTimeline"},{kind:"MdxPage",name:"betterClientServer",route:"/ReportDiagrams/ENGR446/betterClientServer"},{kind:"MdxPage",name:"blockchain",route:"/ReportDiagrams/ENGR446/blockchain"},{kind:"MdxPage",name:"blockchainInSimpleApp",route:"/ReportDiagrams/ENGR446/blockchainInSimpleApp"},{kind:"MdxPage",name:"dna",route:"/ReportDiagrams/ENGR446/dna"},{kind:"MdxPage",name:"linkedBlocks",route:"/ReportDiagrams/ENGR446/linkedBlocks"},{kind:"MdxPage",name:"person",route:"/ReportDiagrams/ENGR446/person"},{kind:"MdxPage",name:"simpleTimeline",route:"/ReportDiagrams/ENGR446/simpleTimeline"},{kind:"MdxPage",name:"smartContractsExp",route:"/ReportDiagrams/ENGR446/smartContractsExp"},{kind:"MdxPage",name:"weeklyPlanLOL",route:"/ReportDiagrams/ENGR446/weeklyPlanLOL"},{kind:"Meta",data:{advancedTimeline:"Advancedtimeline",betterClientServer:"Betterclientserver",blockchain:"Blockchain",blockchainInSimpleApp:"Blockchaininsimpleapp",dna:"Dna",linkedBlocks:"Linkedblocks",person:"Person",simpleTimeline:"Simpletimeline",smartContractsExp:"Smartcontractsexp",weeklyPlanLOL:"Weeklyplanlol"}}]},{kind:"Folder",name:"MISCELLANOUS",route:"/ReportDiagrams/MISCELLANOUS",children:[{kind:"MdxPage",name:"artificialNeuron",route:"/ReportDiagrams/MISCELLANOUS/artificialNeuron"},{kind:"MdxPage",name:"cloud-arch",route:"/ReportDiagrams/MISCELLANOUS/cloud-arch"},{kind:"MdxPage",name:"vuepress-arch",route:"/ReportDiagrams/MISCELLANOUS/vuepress-arch"},{kind:"Meta",data:{artificialNeuron:"Artificialneuron","cloud-arch":"Cloud Arch","vuepress-arch":"Vuepress Arch"}}]},{kind:"MdxPage",name:"bar-chart",route:"/ReportDiagrams/bar-chart"},{kind:"MdxPage",name:"flow-chart",route:"/ReportDiagrams/flow-chart"},{kind:"MdxPage",name:"fontawesomediagram",route:"/ReportDiagrams/fontawesomediagram"},{kind:"Meta",data:{"bar-chart":"Bar Chart","flow-chart":"Flow Chart",fontawesomediagram:"Fontawesomediagram"}}]},{kind:"Meta",data:{index:"Introduction",source:{title:"source ↗",type:"page",href:"https://github.com/FriendlyUser/latex-diagrams-docs",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"miscallenous",route:"/miscallenous",children:[{kind:"MdxPage",name:"assetClasses",route:"/miscallenous/assetClasses"},{kind:"Meta",data:{assetClasses:"Assetclasses"}}]},{kind:"Folder",name:"software",route:"/software",children:[{kind:"MdxPage",name:"datawarehousediagram",route:"/software/datawarehousediagram"},{kind:"MdxPage",name:"dblayers",route:"/software/dblayers"},{kind:"MdxPage",name:"designProcess",route:"/software/designProcess"},{kind:"MdxPage",name:"flutterWidgets",route:"/software/flutterWidgets"},{kind:"MdxPage",name:"ldischemeDiagram",route:"/software/ldischemeDiagram"},{kind:"MdxPage",name:"ml4t",route:"/software/ml4t"},{kind:"MdxPage",name:"stockArchitecture",route:"/software/stockArchitecture"},{kind:"MdxPage",name:"stockReportArch",route:"/software/stockReportArch"},{kind:"MdxPage",name:"vscodeArch",route:"/software/vscodeArch"},{kind:"Meta",data:{datawarehousediagram:"Datawarehousediagram",dblayers:"Dblayers",designProcess:"Designprocess",flutterWidgets:"Flutterwidgets",ldischemeDiagram:"Ldischemediagram",ml4t:"Ml4t",stockArchitecture:"Stockarchitecture",stockReportArch:"Stockreportarch",vscodeArch:"Vscodearch"}}]},{kind:"Folder",name:"stonks",route:"/stonks",children:[{kind:"MdxPage",name:"netBuyBack",route:"/stonks/netBuyBack"},{kind:"Meta",data:{netBuyBack:"Netbuyback"}}]}],headings:[{depth:1,value:"Description",id:"description"},{depth:2,value:"Keywords",id:"keywords"},{depth:2,value:"Source Code",id:"source-code"}],flexsearch:{codeblocks:!0},title:"Description"},themeConfig:o.Z,pageNextRoute:"/DSP/a5_4c",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[9774,9511,2888,179],function(){return e(e.s=15509)}),_N_E=e.O()}]);