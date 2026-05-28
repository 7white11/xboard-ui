const P=window._PAGES_PART1;Object.assign(P,{

// === PLANS ===
plans:()=>{const prices={m:[9.9,29.9,99.9],q:[26.9,79.9,269.9],y:[89.9,299.9,899.9]};
return`<div class="pg on"><div class="pg-hd ani"><h1>Plans</h1><p>Choose the plan that fits your needs</p></div>
<div style="display:flex;justify-content:center;margin-bottom:24px" class="ani"><div class="toggle" id="planToggle">
<button class="on" onclick="setPlanPeriod('m',this)">Monthly</button>
<button onclick="setPlanPeriod('q',this)">Quarterly</button>
<button onclick="setPlanPeriod('y',this)">Yearly</button>
</div></div>
<div class="cards g3 ani ani1" id="planCards">
${['Basic','Pro','Enterprise'].map((n,i)=>{
const icons=['⚡','⭐','👑'];const colors=['var(--ai)','var(--accent)','var(--warn)'];
const feats=[['50 GB traffic','100 Mbps speed','3 devices'],['200 GB traffic','500 Mbps speed','Unlimited devices','Priority support'],['1 TB traffic','Unlimited speed','Unlimited devices','Dedicated support','Custom nodes']];
return`<div class="cd ${i===1?'glow-accent':''}" style="${i===1?'border-color:rgba(34,197,94,.3)':''}">
${i===1?'<div style="position:absolute;top:0;right:0;background:var(--accent);color:#000;font-size:11px;font-weight:700;padding:4px 12px;border-bottom-left-radius:8px">POPULAR</div>':''}
<div class="cd-body" style="padding:24px;position:relative">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
<div style="width:40px;height:40px;border-radius:12px;background:rgba(${i===1?'34,197,94':i===0?'99,102,241':'245,158,11'},.12);display:flex;align-items:center;justify-content:center;font-size:20px">${icons[i]}</div>
<div><div style="font-weight:600;font-size:15px">${n}</div><div style="font-size:12px;color:var(--fg3)">${['Standard','Premium','Business'][i]}</div></div></div>
<div style="margin-bottom:20px"><span class="plan-price" style="font-size:32px;font-weight:700;font-family:var(--mono)">¥${prices.m[i]}</span><span style="font-size:14px;color:var(--fg3)">/mo</span></div>
<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
${feats[i].map(f=>`<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--fg2)"><svg style="width:16px;height:16px;color:var(--accent);flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>${f}</div>`).join('')}
</div>
<button class="btn ${i===1?'btn-p':'btn-s'}" style="width:100%">Subscribe</button></div></div>`}).join('')}
</div>
<div class="cd ani ani2" style="margin-top:24px;padding:0"><div class="cd-body" style="padding:0">
<div style="padding:16px 20px;border-bottom:1px solid var(--bdr)"><span class="cd-lbl" style="font-size:13px">Feature Comparison</span></div>
<table style="width:100%;border-collapse:collapse;font-size:13px">
<tr style="border-bottom:1px solid var(--bdr)"><td style="padding:12px 20px;color:var(--fg3)">Traffic</td><td style="padding:12px;text-align:center">50 GB</td><td style="padding:12px;text-align:center;color:var(--accent)">200 GB</td><td style="padding:12px;text-align:center">1 TB</td></tr>
<tr style="border-bottom:1px solid var(--bdr)"><td style="padding:12px 20px;color:var(--fg3)">Speed Limit</td><td style="padding:12px;text-align:center">100 Mbps</td><td style="padding:12px;text-align:center;color:var(--accent)">500 Mbps</td><td style="padding:12px;text-align:center">Unlimited</td></tr>
<tr style="border-bottom:1px solid var(--bdr)"><td style="padding:12px 20px;color:var(--fg3)">Devices</td><td style="padding:12px;text-align:center">3</td><td style="padding:12px;text-align:center;color:var(--accent)">Unlimited</td><td style="padding:12px;text-align:center">Unlimited</td></tr>
<tr style="border-bottom:1px solid var(--bdr)"><td style="padding:12px 20px;color:var(--fg3)">Priority Support</td><td style="padding:12px;text-align:center;color:var(--err)">✕</td><td style="padding:12px;text-align:center;color:var(--accent)">✓</td><td style="padding:12px;text-align:center;color:var(--accent)">✓</td></tr>
<tr><td style="padding:12px 20px;color:var(--fg3)">Custom Nodes</td><td style="padding:12px;text-align:center;color:var(--err)">✕</td><td style="padding:12px;text-align:center;color:var(--err)">✕</td><td style="padding:12px;text-align:center;color:var(--accent)">✓</td></tr>
</table></div></div>
</div>`},

// === ORDERS ===
orders:()=>`<div class="pg on"><div class="pg-hd ani"><h1>Orders</h1><p>Your order history</p></div>
<div class="tabs ani" id="orderTabs">
<button class="tab on" onclick="filterOrders('all',this)">All (5)</button>
<button class="tab" onclick="filterOrders('paid',this)">Paid (3)</button>
<button class="tab" onclick="filterOrders('pending',this)">Pending (1)</button>
<button class="tab" onclick="filterOrders('cancelled',this)">Cancelled (1)</button>
</div>
<div class="cd ani ani1" id="orderList">
${[['Pro Plan','ORD-20260528001','¥29.90','2026-05-28','paid'],['Basic Plan','ORD-20260520002','¥9.90','2026-05-20','pending'],['Pro Plan','ORD-20260428003','¥29.90','2026-04-28','paid'],['Enterprise','ORD-20260328004','¥99.90','2026-03-28','paid'],['Pro Plan','ORD-20260228005','¥29.90','2026-02-28','cancelled']].map(([plan,no,amt,date,status])=>{
const sm={paid:['Paid','b-g'],pending:['Pending','b-y'],cancelled:['Cancelled','b-r']};
const icons=['📦','⏳','📦','📦','❌'];
return`<div class="list-item" data-status="${status}" onclick="showOrderDetail('${no}','${plan}','${amt}','${date}','${sm[status][0]}')">
<div class="li-icon" style="background:rgba(${status==='paid'?'34,197,94':status==='pending'?'245,158,11':'220,38,38'},.1)"><svg style="color:${status==='paid'?'var(--accent)':status==='pending'?'var(--warn)':'var(--err)'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/></svg></div>
<div class="li-body"><div class="li-title">${plan} <span class="badge ${sm[status][1]}">${sm[status][0]}</span></div><div class="li-sub">${no}</div></div>
<div class="li-right"><div style="font-size:14px;font-weight:600;font-family:var(--mono)">${amt}</div><div style="font-size:11px;color:var(--fg4)">${date}</div></div></div>`}).join('')}
</div></div>`,

// === TICKETS ===
tickets:()=>`<div class="pg on"><div class="pg-hd ani" style="display:flex;align-items:center;justify-content:space-between"><div><h1>Tickets</h1><p>Get support from our team</p></div>
<button class="btn btn-p btn-sm" onclick="showNewTicket()"><svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>New Ticket</button></div>
<div id="ticketContent">
<div class="cd ani ani1">
${[['Connection issue with Tokyo node','I am experiencing timeout errors when connecting to the Tokyo JP-01 server. The connection drops every few minutes.','2026-05-27 14:30','open'],['Billing question about proration','Can I upgrade my plan mid-cycle and get a prorated refund for the remaining days?','2026-05-20 09:15','replied'],['Feature request: WireGuard support','It would be great to have WireGuard protocol support for better performance on mobile devices.','2026-05-15 16:45','closed']].map(([subj,msg,date,st])=>{
const sm={open:['Open','b-g'],replied:['Replied','b-p'],closed:['Closed','b-y']};
return`<div class="list-item" style="cursor:pointer" onclick="showTicketDetail('${subj.replace(/'/g,"\\'")}','${msg.replace(/'/g,"\\'")}','${date}','${sm[st][0]}')">
<div class="li-icon" style="background:rgba(${st==='open'?'34,197,94':st==='replied'?'99,102,241':'245,158,11'},.1)"><svg style="color:${st==='open'?'var(--accent)':st==='replied'?'var(--ai)':'var(--warn)'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></div>
<div class="li-body"><div class="li-title">${subj} <span class="badge ${sm[st][1]}">${sm[st][0]}</span></div><div class="li-sub" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:400px">${msg}</div></div>
<div class="li-right"><div style="font-size:12px;color:var(--fg4)">${date}</div></div></div>`}).join('')}
</div></div>`,

// === INVITE ===
invite:()=>`<div class="pg on"><div class="pg-hd ani"><h1>Invite</h1><p>Earn commissions by inviting friends</p></div>
<div class="cards g4 ani ani1" style="margin-bottom:20px">
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val" style="color:var(--ai)">12</div><div class="cd-sub">Total Invited</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val" style="color:var(--accent)">8</div><div class="cd-sub">Active Users</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val" style="color:var(--warn)">¥86.40</div><div class="cd-sub">Commission Earned</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val">10%</div><div class="cd-sub">Commission Rate</div></div></div>
</div>
<div class="cards g2 ani ani2" style="margin-bottom:20px">
<div class="cd"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl">Your Invite Code</span></div>
<div style="display:flex;align-items:center;gap:12px;margin-top:8px">
<div class="invite-code" style="flex:1;padding:14px 18px;background:var(--bg);border-radius:8px;border:1px dashed var(--bdr2)">OSU7WHITE</div>
<button class="btn btn-s btn-sm" onclick="copyText('OSU7WHITE')">Copy</button></div>
<div style="margin-top:12px"><div style="font-size:11px;color:var(--fg4);margin-bottom:4px">REFERRAL LINK</div><div class="invite-link">https://xboard.example.com/register?code=OSU7WHITE</div></div>
</div></div>
<div class="cd"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl">Commission History</span></div>
<div style="display:flex;flex-direction:column;gap:10px">
${[['user_a@mail.com','¥12.80','2026-05-25'],['user_b@mail.com','¥8.90','2026-05-20'],['user_c@mail.com','¥15.20','2026-05-15'],['user_d@mail.com','¥6.40','2026-05-10']].map(([u,a,d])=>`<div style="display:flex;align-items:center;gap:10px;font-size:12px"><div class="av av-green" style="width:28px;height:28px;font-size:11px">${u[0].toUpperCase()}</div><span style="flex:1">${u}</span><span style="font-family:var(--mono);color:var(--accent)">${a}</span><span style="color:var(--fg4)">${d}</span></div>`).join('')}
</div></div></div>
</div></div>`,

// === KB ===
kb:()=>`<div class="pg on"><div class="pg-hd ani"><h1>Knowledge Base</h1><p>Guides and documentation</p></div>
<div class="search-bar ani"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input placeholder="Search articles..."></div>
<div class="kb-grid ani ani1">
${[['Getting Started','Quick setup guide for all platforms and devices','Setup Guide','5 min read'],['Windows Setup','Configure Clash/V2RayN on Windows step by step','Setup Guide','8 min read'],['macOS Setup','Use ClashX or V2RayU on your Mac','Setup Guide','6 min read'],['iOS Setup','Install Shadowrocket or Quantumult X','Setup Guide','7 min read'],['Android Setup','Configure v2rayNG or Clash for Android','Setup Guide','5 min read'],['Linux Setup','Command line proxy configuration guide','Setup Guide','10 min read'],['Router Setup','Flash梅林/OpenWrt and configure proxy','Advanced','15 min read'],['FAQ','Frequently asked questions and answers','FAQ','3 min read'],['Speed Optimization','Tips to maximize your connection speed','Troubleshooting','6 min read'],['Connection Issues','Diagnose and fix common connection problems','Troubleshooting','8 min read'],['Billing FAQ','Payment methods, refunds, and subscription info','FAQ','4 min read'],['API Documentation','REST API for developers and integrations','Advanced','12 min read']].map(([t,d,c,r])=>`<div class="cd kb-card"><h3>${t}</h3><p>${d}</p><div class="kb-meta"><span class="badge ${c==='Setup Guide'?'b-g':c==='FAQ'?'b-p':c==='Advanced'?'b-y':'b-r'}">${c}</span><span>${r}</span></div></div>`).join('')}
</div></div>`,

// === PROFILE ===
profile:()=>`<div class="pg on"><div class="pg-hd ani"><h1>Profile</h1><p>Manage your account settings</p></div>
<div style="max-width:800px;display:flex;flex-direction:column;gap:20px">
<div class="cd ani ani1"><div class="cd-body" style="padding:24px">
<div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">
<div class="av av-purple" style="width:56px;height:56px;font-size:22px;border-radius:16px">7</div>
<div><div style="font-size:18px;font-weight:600">7white@osu.local</div><div style="font-size:13px;color:var(--fg3);margin-top:2px">osu! ID: 7841529 · Pro Plan</div></div>
</div>
<div class="cards g3" style="gap:12px">
<div style="padding:14px;border-radius:8px;background:var(--bg)"><div style="font-size:11px;color:var(--fg4);margin-bottom:4px">BALANCE</div><div style="font-size:20px;font-weight:700">¥128.00</div></div>
<div style="padding:14px;border-radius:8px;background:var(--bg)"><div style="font-size:11px;color:var(--fg4);margin-bottom:4px">EXPIRES</div><div style="font-size:20px;font-weight:700">2026-12-31</div></div>
<div style="padding:14px;border-radius:8px;background:var(--bg)"><div style="font-size:11px;color:var(--fg4);margin-bottom:4px">TRAFFIC</div><div style="font-size:20px;font-weight:700">42.8 GB</div></div>
</div></div></div>
<div class="cd ani ani2"><div class="cd-body" style="padding:20px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><svg style="width:16px;height:16px;color:var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78Z"/><path d="M15.5 15.5 21 21"/></svg><span style="font-size:13px;font-weight:600">Subscribe Link</span></div>
<div style="display:flex;gap:8px"><input class="inp" value="https://x.example.com/api/v1/client/subscribe?token=***" readonly style="font-family:var(--mono);font-size:12px"/><button class="btn btn-s btn-sm" onclick="copyText(this.previousElement.value)">Copy</button></div>
</div></div>
<div class="cd ani ani3"><div class="cd-body" style="padding:20px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><svg style="width:16px;height:16px;color:var(--ai)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span style="font-size:13px;font-weight:600">Security</span></div>
<div style="display:flex;flex-direction:column;gap:14px">
<div><label style="display:block;font-size:12px;color:var(--fg3);margin-bottom:6px">CURRENT PASSWORD</label><input class="inp" type="password" placeholder="••••••••"></div>
<div><label style="display:block;font-size:12px;color:var(--fg3);margin-bottom:6px">NEW PASSWORD</label><input class="inp" type="password" placeholder="Min 8 characters"></div>
<button class="btn btn-p btn-sm" style="align-self:flex-start">Update Password</button>
<hr style="border:none;border-top:1px solid var(--bdr);margin:4px 0">
<div style="display:flex;align-items:center;justify-content:space-between"><div><div style="font-size:13px;font-weight:500">Two-Factor Auth</div><div style="font-size:12px;color:var(--fg3)">Secure your account with TOTP</div></div>
<div style="width:44px;height:24px;border-radius:12px;background:var(--bg3);border:1px solid var(--bdr);cursor:pointer;position:relative" onclick="this.querySelector('div').style.transform=this.querySelector('div').style.transform==='translateX(20px)'?'':'translateX(20px)';this.style.background=this.querySelector('div').style.transform==='translateX(20px)'?'var(--accent)':'var(--bg3)'"><div style="width:18px;height:18px;border-radius:50%;background:#fff;position:absolute;top:2px;left:2px;transition:transform .2s"></div></div></div>
</div></div></div>
<div class="cd ani ani4 danger-zone"><div class="cd-body" style="padding:20px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><svg style="width:16px;height:16px;color:var(--err)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg><span style="font-size:13px;font-weight:600;color:var(--err)">Danger Zone</span></div>
<div style="display:flex;gap:12px"><button class="btn btn-s btn-sm" onclick="toast('Token has been reset','s')">Reset Subscribe Token</button><button class="btn btn-sm" style="background:var(--err);color:#fff">Delete Account</button></div>
</div></div>
</div>`,

subscribe:()=>{return `<div class="pg on"><div class="pg-hd ani"><h1>Subscribe</h1><p>Add subscription to your client</p></div>
<div style="max-width:800px;display:flex;flex-direction:column;gap:20px">
<div class="cd ani ani1"><div class="cd-body" style="padding:24px">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
<div style="width:44px;height:44px;border-radius:12px;background:rgba(34,197,94,.12);display:flex;align-items:center;justify-content:center"><svg style="width:22px;height:22px;color:var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78Z"/><path d="M15.5 15.5 21 21"/></svg></div>
<div><div style="font-size:16px;font-weight:600">Your Subscribe Link</div><div style="font-size:12px;color:var(--fg3)">Import this URL into your proxy client</div></div>
</div>
<div style="background:var(--bg);border:1px dashed var(--bdr2);border-radius:8px;padding:16px;font-family:var(--mono);font-size:12px;word-break:break-all;color:var(--fg2);line-height:1.6">https://x.example.com/api/v1/client/subscribe?token=***</div><div style="display:flex;gap:10px;margin-top:14px">
<button class="btn btn-p" onclick="copyText(location.href)"><svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>Copy Link</button>
<button class="btn btn-s" onclick="toast('QR placeholder','s')">Show QR Code</button>
</div></div></div>
<div class="cd ani ani2"><div class="cd-body" style="padding:20px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px"><svg style="width:16px;height:16px;color:var(--ai)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg><span style="font-size:13px;font-weight:600">Quick Import Clients</span></div>
<div class="client-grid">
<div class="client-card"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:8px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ai)">C</div><div><div style="font-size:13px;font-weight:600">Clash</div><div style="font-size:11px;color:var(--fg4)">Windows / macOS / Linux</div></div></div></div>
<div class="client-card"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:8px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ai)">S</div><div><div style="font-size:13px;font-weight:600">Shadowrocket</div><div style="font-size:11px;color:var(--fg4)">iOS</div></div></div></div>
<div class="client-card"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:8px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ai)">V</div><div><div style="font-size:13px;font-weight:600">V2rayN</div><div style="font-size:11px;color:var(--fg4)">Windows</div></div></div></div>
<div class="client-card"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:8px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ai)">Q</div><div><div style="font-size:13px;font-weight:600">Quantumult X</div><div style="font-size:11px;color:var(--fg4)">iOS</div></div></div></div>
<div class="client-card"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:8px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ai)">v</div><div><div style="font-size:13px;font-weight:600">v2rayNG</div><div style="font-size:11px;color:var(--fg4)">Android</div></div></div></div>
<div class="client-card"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:8px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ai)">C</div><div><div style="font-size:13px;font-weight:600">Clash for Android</div><div style="font-size:11px;color:var(--fg4)">Android</div></div></div></div>
</div></div></div>
<div class="cards g2 ani ani3">
<div class="cd"><div class="cd-body" style="padding:20px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><svg style="width:16px;height:16px;color:var(--warn)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg><span style="font-size:13px;font-weight:600">Current Plan Info</span></div>
<div style="display:flex;flex-direction:column;gap:10px">
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:var(--fg3)">Plan</span><span style="font-weight:600">Pro</span></div>
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:var(--fg3)">Traffic</span><span>200 GB / month</span></div>
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:var(--fg3)">Speed</span><span>500 Mbps</span></div>
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:var(--fg3)">Expires</span><span>2026-12-31</span></div>
</div></div></div>
<div class="cd"><div class="cd-body" style="padding:20px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><svg style="width:16px;height:16px;color:var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg><span style="font-size:13px;font-weight:600">Usage This Month</span></div>
<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:13px;color:var(--fg3)">Traffic Used</span><span style="font-size:13px;font-family:var(--mono)">42.8 / 200 GB</span></div><div class="bar" style="height:8px"><div class="bar-fill" style="width:21.4%;background:linear-gradient(90deg,var(--accent),var(--ai))"></div></div></div>
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:var(--fg3)">Remaining</span><span style="font-weight:600;color:var(--accent)">157.2 GB</span></div>
</div></div></div>
</div>`},

});

// === GLOBAL FUNCTIONS ===
function go(pg){
document.querySelectorAll('.pg').forEach(p=>p.remove());
document.querySelectorAll('.ni').forEach(n=>n.classList.remove('on'));
const btn=document.querySelector(`[data-pg="${pg}"]`);if(btn)btn.classList.add('on');
if(window.innerWidth<=768)closeSidebar();
const mn=document.getElementById('mn');
mn.innerHTML=P[pg]?P[pg]():'<div class="pg on"><p>Page not found</p></div>';
}

function setPlanPeriod(p,btn){
document.querySelectorAll('#planToggle button').forEach(b=>b.classList.remove('on'));
btn.classList.add('on');
const prices={m:[9.9,29.9,99.9],q:[26.9,79.9,269.9],y:[89.9,299.9,899.9]};
document.querySelectorAll('.plan-price').forEach((el,i)=>el.textContent='¥'+prices[p][i]);
}

function filterOrders(status,btn){
document.querySelectorAll('#orderTabs .tab').forEach(t=>t.classList.remove('on'));
btn.classList.add('on');
document.querySelectorAll('#orderList .list-item').forEach(el=>{
el.style.display=(status==='all'||el.dataset.status===status)?'':'none';
});
}

function showOrderDetail(no,plan,amt,date,status){
document.getElementById('modal').innerHTML=`
<div class="modal-hd"><h3>Order Detail</h3><button class="btn-g" onclick="closeModal()" style="font-size:20px">&times;</button></div>
<div class="modal-body">
<div style="display:flex;flex-direction:column;gap:12px">
<div style="display:flex;justify-content:space-between"><span style="color:var(--fg3)">Order No</span><span style="font-family:var(--mono);font-size:13px">${no}</span></div>
<div style="display:flex;justify-content:space-between"><span style="color:var(--fg3)">Plan</span><span>${plan}</span></div>
<div style="display:flex;justify-content:space-between"><span style="color:var(--fg3)">Amount</span><span style="font-weight:600">${amt}</span></div>
<div style="display:flex;justify-content:space-between"><span style="color:var(--fg3)">Date</span><span>${date}</span></div>
<div style="display:flex;justify-content:space-between"><span style="color:var(--fg3)">Status</span><span class="badge ${status==='Paid'?'b-g':status==='Pending'?'b-y':'b-r'}">${status}</span></div>
</div>
${status==='Pending'?`<button class="btn btn-p" style="width:100%;margin-top:16px" onclick="toast('Payment initiated','s');closeModal()">Pay Now</button>`:''}
</div>`;
document.getElementById('modalBg').classList.add('show');
}

function showTicketDetail(subj,msg,date,status){
document.getElementById('modal').innerHTML=`
<div class="modal-hd"><h3>${subj}</h3><button class="btn-g" onclick="closeModal()" style="font-size:20px">&times;</button></div>
<div class="modal-body">
<div class="msg-left"><div style="width:28px;height:28px;border-radius:50%;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0">U</div><div><div class="msg-bubble">${msg}</div><div class="msg-time">${date}</div></div></div>
${status==='Replied'?`<div class="msg-right"><div style="width:28px;height:28px;border-radius:50%;background:rgba(99,102,241,.2);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--ai);flex-shrink:0">S</div><div><div class="msg-bubble">Thank you for reaching out. We have forwarded this to our technical team. Could you please share your subscription link and the error log?</div><div class="msg-time">2026-05-21 10:30</div></div></div>`:''}
<div style="margin-top:16px;display:flex;gap:8px"><input class="inp" placeholder="Type a reply..."><button class="btn btn-p btn-sm">Send</button></div>
</div>`;
document.getElementById('modalBg').classList.add('show');
}

function showNewTicket(){
document.getElementById('modal').innerHTML=`
<div class="modal-hd"><h3>New Ticket</h3><button class="btn-g" onclick="closeModal()" style="font-size:20px">&times;</button></div>
<div class="modal-body" style="display:flex;flex-direction:column;gap:14px">
<div><label style="display:block;font-size:12px;color:var(--fg3);margin-bottom:6px">SUBJECT</label><input class="inp" placeholder="Brief description"></div>
<div><label style="display:block;font-size:12px;color:var(--fg3);margin-bottom:6px">PRIORITY</label><div class="toggle"><button class="on">Low</button><button>Medium</button><button>High</button></div></div>
<div><label style="display:block;font-size:12px;color:var(--fg3);margin-bottom:6px">MESSAGE</label><textarea class="inp" placeholder="Describe your issue in detail..."></textarea></div>
<button class="btn btn-p" onclick="toast('Ticket submitted!','s');closeModal()">Submit Ticket</button>
</div>`;
document.getElementById('modalBg').classList.add('show');
}

function closeModal(){document.getElementById('modalBg').classList.remove('show')}

function toast(msg,type='s'){
const box=document.getElementById('toasts');
const t=document.createElement('div');
t.className='toast toast-'+type;
t.innerHTML=`${type==='s'?'✓':'✕'} ${msg}`;
box.appendChild(t);
setTimeout(()=>t.remove(),3000);
}

function copyText(text){
navigator.clipboard.writeText(text).then(()=>toast('Copied!','s')).catch(()=>toast('Copy failed','e'));
}

// Init
document.querySelectorAll('.ni').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.pg)));
go('dashboard');