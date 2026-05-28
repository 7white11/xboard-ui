const PAGES={};

// === DASHBOARD ===
PAGES.dashboard=()=>`
<div class="pg on" id="pg-dashboard">
<div class="pg-hd ani"><h1>Dashboard</h1><p>Welcome back, 7white@osu.local</p></div>
<div class="cd ani ani1" class="announcement-banner">
<svg style="width:18px;height:18px;color:var(--accent);flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>
<div style="flex:1"><b style="font-size:13px">System Update v3.2.1</b><span style="font-size:12px;color:var(--fg3);margin-left:8px">New Trojan nodes available in Tokyo & Seoul</span></div>
<button class="btn-g" onclick="this.closest('.cd').style.display='none'" style="font-size:18px;line-height:1">&times;</button>
</div>
<div class="cards g4 ani ani2">
<div class="cd"><div class="cd-body"><div class="cd-hd"><span class="cd-lbl">Plan</span><div class="cd-icon" style="background:var(--accent-bg)"><svg style="color:var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div></div><div class="cd-val">Pro</div><div class="cd-sub">Expires 2026-12-31 · 217 days left</div></div></div>
<div class="cd"><div class="cd-body"><div class="cd-hd"><span class="cd-lbl">Traffic</span><div class="cd-icon" style="background:var(--ai-bg)"><svg style="color:var(--ai)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div></div><div class="cd-val">42.8 <span style="font-size:14px;color:var(--fg3)">/ 200 GB</span></div><div class="bar"><div class="bar-fill" style="width:21.4%;background:linear-gradient(90deg,var(--accent),var(--ai))"></div></div></div></div>
<div class="cd"><div class="cd-body"><div class="cd-hd"><span class="cd-lbl">Balance</span><div class="cd-icon" style="background:var(--warn-bg)"><svg style="color:var(--warn)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div></div><div class="cd-val">¥128.00</div><div class="cd-sub">Account balance</div></div></div>
<div class="cd"><div class="cd-body"><div class="cd-hd"><span class="cd-lbl">Devices</span><div class="cd-icon" style="background:var(--accent-bg)"><svg style="color:var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg></div></div><div class="cd-val">3 / 5</div><div class="cd-sub">Active connections</div></div></div>
</div>
<div class="cards g3 ani ani3" style="margin-top:16px">
<div class="cd" style="grid-column:span 2"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl" style="font-size:13px">Traffic — Last 7 Days</span><span style="font-size:12px;color:var(--fg3)">Total: 12.4 GB</span></div>
<div class="chart-box"><svg viewBox="0 0 700 200" preserveAspectRatio="none">
<defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--accent)" stop-opacity="0.3"/><stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
<path d="M0,160 L100,130 L200,145 L300,90 L400,110 L500,60 L600,80 L700,50 L700,200 L0,200Z" fill="url(#cg)"/>
<path d="M0,160 L100,130 L200,145 L300,90 L400,110 L500,60 L600,80 L700,50" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
<circle cx="0" cy="160" r="3" fill="var(--accent)"/><circle cx="100" cy="130" r="3" fill="var(--accent)"/><circle cx="200" cy="145" r="3" fill="var(--accent)"/><circle cx="300" cy="90" r="3" fill="var(--accent)"/><circle cx="400" cy="110" r="3" fill="var(--accent)"/><circle cx="500" cy="60" r="3" fill="var(--accent)"/><circle cx="600" cy="80" r="3" fill="var(--accent)"/><circle cx="700" cy="50" r="3" fill="var(--accent)"/>
<text x="0" y="195" fill="var(--fg4)" font-size="10" font-family="var(--sans)">Mon</text><text x="100" y="195" fill="var(--fg4)" font-size="10">Tue</text><text x="200" y="195" fill="var(--fg4)" font-size="10">Wed</text><text x="300" y="195" fill="var(--fg4)" font-size="10">Thu</text><text x="400" y="195" fill="var(--fg4)" font-size="10">Fri</text><text x="500" y="195" fill="var(--fg4)" font-size="10">Sat</text><text x="600" y="195" fill="var(--fg4)" font-size="10">Sun</text>
</svg></div></div></div>
<div class="cd"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl">Recent Activity</span></div>
<div style="display:flex;flex-direction:column;gap:12px">
<div style="display:flex;gap:10px;align-items:flex-start"><div class="b-dot b-dot-g" style="margin-top:5px"></div><div><div style="font-size:12px;font-weight:500">Login from 10.127.0.10</div><div style="font-size:11px;color:var(--fg4)">2 min ago</div></div></div>
<div style="display:flex;gap:10px;align-items:flex-start"><div class="b-dot b-dot-g" style="margin-top:5px"></div><div><div style="font-size:12px;font-weight:500">Subscribed to Pro Plan</div><div style="font-size:11px;color:var(--fg4)">3 days ago</div></div></div>
<div style="display:flex;gap:10px;align-items:flex-start"><div class="b-dot" style="margin-top:5px;background:var(--ai)"></div><div><div style="font-size:12px;font-weight:500">Password changed</div><div style="font-size:11px;color:var(--fg4)">1 week ago</div></div></div>
<div style="display:flex;gap:10px;align-items:flex-start"><div class="b-dot b-dot-g" style="margin-top:5px"></div><div><div style="font-size:12px;font-weight:500">Account created</div><div style="font-size:11px;color:var(--fg4)">2 weeks ago</div></div></div>
</div></div></div>
</div>
<div class="cards g3 ani ani4" style="margin-top:16px">
<div class="cd" style="cursor:pointer" onclick="go('plans')"><div class="cd-body"><div style="display:flex;align-items:center;justify-content:space-between"><div><div style="font-size:14px;font-weight:600">Upgrade Plan</div><div style="font-size:12px;color:var(--fg3);margin-top:2px">3 plans available</div></div><svg style="width:16px;height:16px;color:var(--fg4)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></div></div></div>
<div class="cd" style="cursor:pointer" onclick="go('orders')"><div class="cd-body"><div style="display:flex;align-items:center;justify-content:space-between"><div><div style="font-size:14px;font-weight:600">Order History</div><div style="font-size:12px;color:var(--fg3);margin-top:2px">5 orders total</div></div><svg style="width:16px;height:16px;color:var(--fg4)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></div></div></div>
<div class="cd" style="cursor:pointer" onclick="go('tickets')"><div class="cd-body"><div style="display:flex;align-items:center;justify-content:space-between"><div><div style="font-size:14px;font-weight:600">Support</div><div style="font-size:12px;color:var(--fg3);margin-top:2px">1 open ticket</div></div><svg style="width:16px;height:16px;color:var(--fg4)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></div></div></div>
</div>`;

// === NODES ===
PAGES.nodes=()=>`
<div class="pg on"><div class="pg-hd ani"><h1>Nodes</h1><p>Server status and latency</p></div>
<div class="cards g4 ani ani1" style="margin-bottom:20px">
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val" style="color:var(--accent)">18</div><div class="cd-sub">Online</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val" style="color:var(--warn)">2</div><div class="cd-sub">Maintenance</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val" style="color:var(--ai)">42ms</div><div class="cd-sub">Avg Latency</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val">3</div><div class="cd-sub">Regions</div></div></div>
</div>
<div class="cd ani ani2"><div class="cd-body" style="padding:0">
<div class="region-hd">🌏 Asia Pacific <span class="rc">8 servers</span></div>
${['🇯🇵 Tokyo JP-01','🇯🇵 Tokyo JP-02','🇰🇷 Seoul KR-01','🇸🇬 Singapore SG-01','🇭🇰 Hong Kong HK-01','🇹🇼 Taiwan TW-01','🇮🇩 Jakarta ID-01','🇮🇳 Mumbai IN-01'].map((n,i)=>{
const ping=[32,35,28,65,12,8,78,120][i];const load=[45,62,38,55,71,22,33,18][i];
const pc=load>70?'var(--err)':load>50?'var(--warn)':'var(--accent)';
const pp=ping>100?'var(--err)':ping>50?'var(--warn)':'var(--accent)';
const proto=['VMess','Trojan','VMess','Trojan','SS','VMess','Trojan','VMess'][i];
return`<div class="node-card"><span class="b-dot b-dot-g"></span><span class="node-name">${n}</span><span class="pill">${proto}</span><div class="node-load"><div class="bar"><div class="bar-fill" style="width:${load}%;background:${pc}"></div></div></div><span class="node-ping" style="color:${pp}">${ping}ms</span></div>`}).join('')}
<div class="region-hd" style="border-top:1px solid var(--bdr);margin-top:8px;padding-top:16px">🇪🇺 Europe <span class="rc">6 servers</span></div>
${['🇩🇪 Frankfurt DE-01','🇳🇱 Amsterdam NL-01','🇬🇧 London UK-01','🇫🇷 Paris FR-01','🇸🇪 Stockholm SE-01','🇵🇱 Warsaw PL-01'].map((n,i)=>{
const ping=[145,138,152,148,155,160][i];const load=[55,42,68,35,28,15][i];
const pc=load>70?'var(--err)':load>50?'var(--warn)':'var(--accent)';
const pp=ping>150?'var(--warn)':'var(--accent)';
return`<div class="node-card"><span class="b-dot b-dot-g"></span><span class="node-name">${n}</span><span class="pill">Trojan</span><div class="node-load"><div class="bar"><div class="bar-fill" style="width:${load}%;background:${pc}"></div></div></div><span class="node-ping" style="color:${pp}">${ping}ms</span></div>`}).join('')}
<div class="region-hd" style="border-top:1px solid var(--bdr);margin-top:8px;padding-top:16px">🇺🇸 Americas <span class="rc">4 servers</span></div>
${['🇺🇸 Los Angeles US-01','🇺🇸 San Jose US-02','🇧🇷 São Paulo BR-01','🇨🇦 Toronto CA-01'].map((n,i)=>{
const ping=[165,158,220,175][i];const load=[72,45,25,38][i];
const pc=load>70?'var(--err)':load>50?'var(--warn)':'var(--accent)';
return`<div class="node-card"><span class="b-dot ${i===0?'b-dot-y':'b-dot-g'}"></span><span class="node-name">${n}</span><span class="pill">${['VMess','Trojan','SS','Trojan'][i]}</span><div class="node-load"><div class="bar"><div class="bar-fill" style="width:${load}%;background:${pc}"></div></div></div><span class="node-ping" style="color:var(--warn)">${ping}ms</span></div>`}).join('')}
</div></div></div>`;

// === TRAFFIC ===
PAGES.traffic=()=>`
<div class="pg on"><div class="pg-hd ani"><h1>Traffic</h1><p>Usage statistics and details</p></div>
<div class="cards g3 ani ani1" style="margin-bottom:20px">
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val">42.8 GB</div><div class="cd-sub">Used this month</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val">157.2 GB</div><div class="cd-sub">Remaining</div></div></div>
<div class="cd"><div class="cd-body" style="text-align:center"><div class="cd-val">1.86 GB</div><div class="cd-sub">Daily average</div></div></div>
</div>
<div class="cd ani ani2" style="margin-bottom:20px"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl" style="font-size:13px">Monthly Traffic — 30 Days</span></div>
<div class="chart-box" style="height:180px"><svg viewBox="0 0 900 180" preserveAspectRatio="none">
<defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--ai)" stop-opacity="0.25"/><stop offset="100%" stop-color="var(--ai)" stop-opacity="0"/></linearGradient></defs>
${(()=>{const d=[2.1,1.8,2.5,3.2,1.5,1.2,2.8,3.5,2.2,1.9,2.6,3.8,2.1,1.4,2.9,4.2,3.1,2.0,1.7,2.3,3.6,2.8,1.5,2.1,3.0,2.5,1.8,2.7,3.4,2.2];
const max=Math.max(...d);const pts=d.map((v,i)=>`${(i/(d.length-1))*900},${180-(v/max)*150}`).join(' ');
const area=pts+` 900,180 0,180`;
return`<polygon points="${area}" fill="url(#tg)"/><polyline points="${pts}" fill="none" stroke="var(--ai)" stroke-width="2"/>`})()}
${Array.from({length:10},(_,i)=>`<text x="${i*100}" y="175" fill="var(--fg4)" font-size="9">${(i+1)*3}</text>`).join('')}
</svg></div></div></div>
<div class="cards g2 ani ani3">
<div class="cd"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl">By Protocol</span></div>
<div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
${[['VMess',58,'var(--ai)'],['Trojan',35,'var(--accent)'],['Shadowsocks',7,'var(--warn)']].map(([p,v,c])=>`<div><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:12px">${p}</span><span style="font-size:12px;color:var(--fg3)">${v}%</span></div><div class="bar"><div class="bar-fill" style="width:${v}%;background:${c}"></div></div></div>`).join('')}
</div></div></div>
<div class="cd"><div class="cd-body">
<div class="cd-hd"><span class="cd-lbl">Top Servers</span></div>
<div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
${[['Tokyo JP-01','8.2 GB'],['Hong Kong HK-01','6.8 GB'],['Seoul KR-01','5.4 GB'],['Singapore SG-01','4.1 GB'],['Los Angeles US-01','3.7 GB']].map(([s,v],i)=>`<div style="display:flex;align-items:center;gap:8px"><span style="font-size:11px;color:var(--fg4);width:16px">${i+1}</span><span style="font-size:12px;flex:1">${s}</span><span style="font-size:12px;font-family:var(--mono);color:var(--fg3)">${v}</span></div>`).join('')}
</div></div></div>
</div>`;

// Continue in next part...
window._PAGES_PART1=PAGES;