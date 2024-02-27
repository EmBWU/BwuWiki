"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[7627],{9852:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>w,frontMatter:()=>h,metadata:()=>f,toc:()=>y});var n=i(7624),a=i(2172),s=i(1504),r=i(2124),o=i(5296),l=i(3656),c=i(8224),d=i(1460);const p=JSON.parse('[{"id":1,"title":"Website Redesign 2.0","status":"In-progress","category":"Website","description":"We\'re embarking on a journey to revamp the website, aiming for a modern and sleek appearance. The upcoming enhancements encompass a range of features, such as:\\n\\n- **Improved Design Elements:** Elevating the visual appeal with enhanced design elements.\\n\\n- **New Script Market:**\\n  - *Direct Linking to Wiki:* Seamlessly connect to relevant information.\\n  - *Flexible Script Purchases:* Acquire scripts for varying durations.\\n  - *Rating and Comments:* Express your opinions with a 5-star rating system and leave comments.\\n  - *Script Metrics Overview:* Gain insights into script performance.\\n\\n- **Streamlined Payment Page:**\\n  Simplifying your transactions with a unified cart system, allowing you to add items and complete a single transaction for all your needs.\\n\\n\\n\\n- **User Profile Section:**\\n  Access a consolidated view of user data, encompassing payment history and current subscriptions.\\n\\nThese upgrades are geared towards providing a more seamless and enriched user experience.","image":""},{"id":2,"title":"Loader 2.0","status":"In-progress","category":"Loader","description":"Exploring innovative features and improvements. While the details are still in development, we envision a range of enhancements that will elevate the user experience. Stay tuned for updates as we progress through the planning and implementation stages.\\n\\n- **Improved Design Elements:** Our commitment to enhancing visual appeal and user experience remains a top priority. Expect a more modern and streamlined appearance with refined design elements.\\n\\n- **Fix for Jagex Accounts:** Ensuring a seamless connection is crucial, particularly for Jagex accounts. This update will be specifically tailored to address any launching issues related to Jagex accounts.\\n\\n- **Tabbed Clients:** Simplify your navigation experience with the introduction of tabbed clients. Whether managing multiple accounts or seamlessly switching between different tasks, the tabbed clients feature adds a layer of convenience to your usage.\\n\\n- **Increased Security:** Your security is our top priority. We\'re implementing enhanced security measures to fortify the protection of both clients and their valuable data.\\n\\n- **Better Loader Updates:** Experience a smoother and more user-friendly update process. Our aim is to ensure seamless integration and minimal disruption during loader updates.\\n\\n- **Script Market:** Explore, add, search, and browse all our script listings without leaving the launcher or client. The Script Market offers a seamless experience for discovering and managing scripts directly from the launcher.\\n\\n- **Remember Me Option:** Bid farewell to frequent logins. With the new \\"Remember Me\\" option, enjoy a more streamlined experience by eliminating the need to repeatedly log in.\\n\\n- **Proxy Support:** Enhance your security and privacy with added proxy support. The upcoming update includes proxy integration, offering users the ability to utilize proxies seamlessly within the client for an added layer of protection.\\n\\n- **Push Notifications:** Stay informed in real-time with push notifications. Receive timely updates and alerts directly through the client, ensuring that you are always in the loop and aware of important information.\\n\\n- **Scheduled Client Reloads:** Customize your experience with scheduled client reloads. This feature allows users to automate client reloads at specified intervals, ensuring optimal performance and efficiency without manual intervention.\\n\\n- **Multi-launch:** Simplify your account management with multi-launch capabilities. Tick all the accounts you want to launch and hit a single button, making it easy to launch multiple accounts simultaneously for a more efficient and streamlined user experience."},{"id":3,"title":"Java Update","status":"In-progress","category":"Client","description":"We are excited to announce that we are in the process of upgrading to Java 22. This update brings a range of improvements, including enhanced security features, performance optimizations, and new functionalities. The transition to Java 22 aligns with our commitment to staying current with the latest technology, ensuring our software remains robust and up-to-date. "},{"id":4,"title":"User Metrics Dashboard","status":"Idea Building","category":"Website","description":"Explore comprehensive metrics related to your accounts.  Inlcudes Exp gained,script runtimes."},{"id":5,"title":"Create a Wiki","status":"Completed","category":"Website","description":"Set up and establish a comprehensive wiki system to enhance the overall user experience."},{"id":6,"title":"Price Reworking","status":"Idea Building","category":"Website","description":"Engage in comprehensive discussions and collaborative efforts aimed at refining and enhancing pricing options for both client services and script sales. This initiative seeks to explore and implement strategies that not only align with client needs but also optimize the monetization potential of script sales. The overarching goal is to create a pricing structure that is not only competitive but also reflective of the value provided to clients and the inherent quality of the scripts."}]'),u=()=>{const[e,t]=(0,s.useState)({category:"all",status:"all"}),[i,a]=(0,s.useState)({}),u=[...new Set(p.map((e=>e.category)))],m=[...new Set(p.map((e=>e.status)))],h=["In-progress","Idea Building","Completed"],g=e=>{switch(e){case"In-progress":return"#e67e22";case"Idea Building":return"#ff3333";case"Completed":return"#33cc33";default:return"#ffffff"}},f=(e,i)=>{t((t=>({...t,[e]:i})))};return(0,n.jsxs)("div",{className:"timeline-container",children:[(0,n.jsxs)("div",{className:"timeline-filter-buttons",children:[(0,n.jsxs)("div",{className:"timeline-filter",children:[(0,n.jsx)("span",{children:"Category:"}),(0,n.jsxs)("select",{className:"styled-dropdown",value:e.category,onChange:e=>f("category",e.target.value),style:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:[(0,n.jsx)("option",{value:"all",style:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:"All"}),u.map((e=>(0,n.jsx)("option",{value:e,style:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:e},e)))]})]}),(0,n.jsxs)("div",{className:"timeline-filter",children:[(0,n.jsx)("span",{children:"Status:"}),(0,n.jsxs)("select",{className:"styled-dropdown",value:e.status,onChange:e=>f("status",e.target.value),style:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:[(0,n.jsx)("option",{value:"all",style:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:"All"}),m.map((e=>(0,n.jsx)("option",{value:e,style:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:e},e)))]})]})]}),(0,n.jsx)("div",{className:"timeline-vertical-timeline",children:p.filter((t=>!("all"!==e.category&&t.category.toLowerCase()!==e.category.toLowerCase()||"all"!==e.status&&t.status.toLowerCase()!==e.status.toLowerCase()))).sort(((e,t)=>h.indexOf(e.status)-h.indexOf(t.status))).map((e=>(0,n.jsx)("div",{className:"timeline-vertical-timeline-item",children:(0,n.jsxs)(o.c,{sx:{borderRadius:6,borderTopRightRadius:36,borderBottomRightRadius:36,boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",textAlign:"center",padding:"8px",backgroundColor:g(e.status),textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",marginBottom:"16px",color:"#fff",h3:{color:"#000",margin:0,textAlign:"center",marginBottom:"8px",width:"100%",display:"block"},p:{color:"#000",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",margin:0},position:"relative"},variant:"outlined",children:[(0,n.jsxs)("div",{className:"timeline-content-header",style:{display:"flex",justifyContent:"space-between",padding:"8px",alignItems:"center"},children:[(0,n.jsxs)("h3",{children:[e.title,(0,n.jsx)("p",{style:{padding:"8px",margin:0,color:"#fff"},children:e.status})]}),(0,n.jsx)("div",{children:(0,n.jsx)(l.c,{onClick:()=>{return t=e.id,void a((e=>({...e,[t]:!e[t]})));var t},children:i[e.id]?(0,n.jsx)(d.c,{style:{color:"#000"}}):(0,n.jsx)(c.c,{style:{color:"#000"}})})})]}),!i[e.id]&&(0,n.jsx)(r.I,{className:"custom-markdown",children:e.description})]})},e.id)))})]})};var m=i(9188);const h={title:"Roadmap"},g=void 0,f={id:"Roadmap/timeline",title:"Roadmap",description:"This document outlines a broad roadmap of our team's goals and ongoing projects. It's important to note that not every detail mentioned here will be implemented or supported. Additionally, we won't be providing specific estimated timelines for these initiatives. The roadmap serves as a high-level overview of our strategic direction, subject to adjustments and refinements as needed.",source:"@site/docs/Roadmap/timeline.md",sourceDirName:"Roadmap",slug:"/Roadmap/timeline",permalink:"/Roadmap/timeline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Roadmap"},sidebar:"mainSidebar",previous:{title:"ChopWithUs",permalink:"/ChopWithUs"},next:{title:"Resources",permalink:"/Information/Resources/"}},x={},y=[];function v(e){const t={admonition:"admonition",p:"p",...(0,a.M)(),...e.components};return(0,n.jsxs)(m.c,{title:"Roadmap",children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This document outlines a broad roadmap of our team's goals and ongoing projects. It's important to note that not every detail mentioned here will be implemented or supported. Additionally, we won't be providing specific estimated timelines for these initiatives. The roadmap serves as a high-level overview of our strategic direction, subject to adjustments and refinements as needed."})}),(0,n.jsx)(u,{})]})}function w(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}}}]);