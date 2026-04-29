(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`urlaubsplanung_trips`,t=`urlaubsplanung_notes`,n=`urlaubsplanung_flight`,r=[{id:`opt-a`,badge:{text:`⭐ Beste Wahl`,cls:`gold`},pick:!0,out:{time:`07:00`,arr:`08:40`,arrOk:!0,airline:`SWISS`,duration:`1h 40min`},ret:{time:`20:00`,arr:`21:55`,airline:`Helvetic Airways`,duration:`1h 55min`},price:172,tip:`Früh in NAP (08:40) — Transfer nach Amalfi bequem möglich. Abends zurück, letzter Tag voll genossen. 8 % weniger CO₂.`},{id:`opt-b`,badge:{text:`Nachmittags zurück`,cls:`blue`},pick:!1,out:{time:`07:00`,arr:`08:40`,arrOk:!0,airline:`SWISS`,duration:`1h 40min`},ret:{time:`14:50`,arr:`16:40`,airline:`airBaltic`,duration:`1h 50min`},price:198,tip:`Frühe Ankunft (08:40), Transfer gut machbar. Am letzten Tag noch bis Mittag Zeit. 13 % weniger CO₂.`},{id:`opt-c`,badge:{text:`Mittags an`,cls:`gray`},pick:!1,out:{time:`12:20`,arr:`14:00`,arrOk:!1,airline:`airBaltic`,duration:`1h 40min`},ret:{time:`14:50`,arr:`16:40`,airline:`airBaltic`,duration:`1h 50min`},price:281,tip:`Ankunft erst 14:00 — Transfer nach Amalfi am Nachmittag. Rückflug ebenfalls nachmittags.`},{id:`opt-d`,badge:{text:`💰 Günstigste`,cls:`green`},pick:!1,out:{time:`07:00`,arr:`08:40`,arrOk:!0,airline:`SWISS`,duration:`1h 40min`},ret:{time:`09:30`,arr:`11:20`,airline:`SWISS`,duration:`1h 50min`},price:172,tip:`Frühe Ankunft, aber Rückflug 09:30 — letzter Morgen in Amalfi verloren. 17 % weniger CO₂.`},{id:`opt-e`,badge:{text:`Später Hinflug`,cls:`gray`},pick:!1,out:{time:`17:00`,arr:`18:40`,arrOk:!1,airline:`SWISS`,duration:`1h 40min`},ret:{time:`14:50`,arr:`16:40`,airline:`airBaltic`,duration:`1h 50min`},price:218,tip:`Ankunft erst 18:40 — Transfer nach Amalfi abends. Dafür entspannter Rückflug am Nachmittag.`},{id:`opt-f`,badge:{text:`Spät zurück`,cls:`blue`},pick:!1,out:{time:`17:00`,arr:`18:40`,arrOk:!1,airline:`SWISS`,duration:`1h 40min`},ret:{time:`20:00`,arr:`21:55`,airline:`Helvetic Airways`,duration:`1h 55min`},price:191,tip:`Ankunft erst abends, aber Rückflug 20:00 — letzter Tag bleibt fast komplett nutzbar.`}],i=[{id:`tr-ferry`,icon:`⛴️`,name:`Fähre (beide Wege)`,badge:{text:`✨ Empfehlung`,cls:`gold`},route:`Flughafen → Hafen Beverello → Amalfi`,duration:`~2h total`,priceOne:74,priceReturn:148,platform:`NLG Ferries · Caremar`,pro:`Spektakuläre Aussicht auf die Küste vom Meer — das schönste Ankommen`,con:`Zwischenschritt: Flughafen → Hafen Beverello (~14 CHF). Fähre ~30 CHF p.P.`,pick:!1,times:[`08:35`,`10:00`,`10:45`,`13:15`,`15:20`,`17:00`]},{id:`tr-combo`,icon:`⛴️`,name:`Fähre hin · Transfer zurück`,badge:{text:`🎯 Top-Kombi`,cls:`gold`},route:`Hin: Beverello → Amalfi (Fähre) · Zurück: Amalfi → Flughafen (privat)`,duration:`Hin ~2h · Zurück ~1h 18min`,priceOne:74,priceReturn:155,platform:`NLG Ferries + GetYourGuide`,pro:`Scenic Anreise übers Meer. Stressfreie Rückreise — direkt zum Flughafen, kein Hafen.`,con:`Fähre erfordert Zwischenschritt: Flughafen → Hafen Beverello (~14 CHF).`,pick:!0,isCombo:!0,comboOut:{icon:`⛴️`,label:`Fähre`,detail:`Beverello → Amalfi · ~1h 45min`},comboRet:{icon:`🚕`,label:`Privater Transfer`,detail:`Amalfi → Flughafen · ~1h 18min`},times:[`08:35`,`10:00`,`10:45`,`13:15`,`15:20`,`17:00`]},{id:`tr-shared`,icon:`🚐`,name:`Shared Shuttle`,badge:{text:`Bequem`,cls:`blue`},route:`Direkt Flughafen → Amalfiküste`,duration:`~1h 30min`,priceOne:74,priceReturn:148,platform:`GetYourGuide`,pro:`Kein Umsteigen, direkt vom Terminal abgeholt`,con:`Geteiltes Fahrzeug, ggf. kurze Wartezeit. Preis p.P. oder Gruppe vorab prüfen.`,pick:!1},{id:`tr-private`,icon:`🚕`,name:`Privater Transfer`,badge:{text:`Exklusiv`,cls:`terra`},route:`Direkt Flughafen → Amalfi, nur für euch`,duration:`~1h 18min`,priceOne:81,priceReturn:162,platform:`GetYourGuide · GetTransfer`,pro:`Nur für euch, flexible Abfahrtszeit, direkte Abholung im Terminal`,con:`Etwas teurer als Shared. GetTransfer: Economy ab €84, Van ab €86.`,pick:!1},{id:`tr-bus`,icon:`🚌`,name:`Pintour Shuttle`,badge:{text:`💰 Günstigste`,cls:`green`},route:`Direkt Flughafen → Amalfi (Piazza Flavio Gioia)`,duration:`~1h 50min`,priceOne:44,priceReturn:88,platform:`Pintour · pintourbus.com · +39 335 691 0211`,pro:`€20 p.P. = CHF ~44 für euch beide (einfach). Ihr landet 08:40 → Bus 10:00 → Amalfi ~11:50 ✓`,con:`Zurück: letzter sicherer Bus 15:20 → Flughafen 17:10 (für 20h-Flug). 17:50-Bus ist zu knapp!`,pick:!1,times:[`06:30`,`10:00`,`12:00`,`15:00`,`18:00`,`21:00`],timesHighlight:`10:00`,timesBack:[{t:`07:20`,note:``},{t:`09:20`,note:``},{t:`12:50`,note:``},{t:`15:20`,note:`✓ sicher`},{t:`17:50`,note:`⚠ knapp`}]},{id:`tr-bus-combo`,icon:`🚌`,name:`Pintour hin · Transfer zurück`,badge:{text:`💸 Günstigste Kombi`,cls:`green`},route:`Hin: Flughafen → Amalfi (Bus) · Zurück: Amalfi → Flughafen (privat)`,duration:`Hin ~1h 50min · Zurück ~1h 18min`,priceOne:44,priceReturn:125,platform:`Pintour + GetYourGuide / GetTransfer`,pro:`Günstigste Kombination. Kein Zeitdruck am letzten Tag — privater Rücktransfer wann ihr wollt.`,con:`Hinfahrt: müsst den 10:00-Bus erwischen (genug Zeit nach 08:40-Landung). Pintour vorbuchen.`,pick:!1,isCombo:!0,comboOut:{icon:`🚌`,label:`Pintour Shuttle`,detail:`Ab Flughafen 10:00 → Amalfi ~11:50`},comboRet:{icon:`🚕`,label:`Privater Transfer`,detail:`Amalfi → Flughafen · flexibel`},times:[`06:30`,`10:00`,`12:00`,`15:00`,`18:00`,`21:00`],timesHighlight:`10:00`},{id:`tr-taxi`,icon:`🚖`,name:`Taxi`,badge:{text:`Flexibel`,cls:`gray`},route:`Direkt Flughafen → Amalfi`,duration:`~1h 18min`,priceOne:85,priceReturn:170,platform:`Direkt am Flughafen`,pro:`24/7 verfügbar, keine Buchung nötig, sofort nach der Landung`,con:`In der Hochsaison Warteschlangen möglich`,pick:!1}],a=`urlaubsplanung_transfer`,o=JSON.parse(localStorage.getItem(e)??`[]`),s=localStorage.getItem(n)??null,c=localStorage.getItem(a)??null;function l(e){return new Date(e+`T12:00:00`).toLocaleDateString(`de-DE`,{day:`2-digit`,month:`short`,year:`numeric`})}function u(e,t){return Math.round((new Date(t)-new Date(e))/864e5)}function d(e){return`CHF ${Number(e).toLocaleString(`de-CH`)}`}function f(){let e=document.getElementById(`flight-grid`);e.innerHTML=``,r.forEach(t=>{let r=document.createElement(`div`);r.className=`f-card${t.pick?` pick`:``}${s===t.id?` selected`:``}`;let i=t.out.arrOk?`<span class="arr-tag ok">✓ vor Mittag</span>`:`<span class="arr-tag warn">⚠ nach 12h</span>`;r.innerHTML=`
      <div class="f-card-top">
        <span class="f-badge ${t.badge.cls}">${t.badge.text}</span>
        ${i}
      </div>
      <div class="f-leg">
        <span class="route">${t.out.time} ZRH <span class="arrow">→</span> NAP ${t.out.arr}</span>
        <span class="airline">${t.out.airline}</span>
      </div>
      <div class="f-leg"><span class="info">${t.out.duration} · Direktflug</span></div>
      <hr class="f-divider" />
      <div class="f-leg">
        <span class="route">${t.ret.time} NAP <span class="arrow">→</span> ZRH ${t.ret.arr}</span>
        <span class="airline">${t.ret.airline}</span>
      </div>
      <div class="f-leg"><span class="info">${t.ret.duration} · Direktflug</span></div>
      ${t.tip?`<p class="f-tip">${t.tip}</p>`:``}
      <div class="f-footer">
        <div class="f-price">
          <div><span class="chf">CHF</span><span class="amount">${t.price}</span><span class="pp">p.P.</span></div>
          <div class="total-pp">${d(t.price*2)} für 2 Pers.</div>
        </div>
        <button class="f-select">${s===t.id?`✓ Gewählt`:`Wählen`}</button>
      </div>
    `,r.addEventListener(`click`,()=>{s=s===t.id?null:t.id,localStorage.setItem(n,s??``),f(),m()}),e.appendChild(r)})}function p(){let e=document.getElementById(`transfer-grid`);e.innerHTML=``,i.forEach(t=>{let n=document.createElement(`div`);n.className=`tr-card${t.pick?` pick`:``}${c===t.id?` selected`:``}`;let r=t.id.startsWith(`tr-bus`)?`🚌 Ab Flughafen (NAP):`:`⛴️ Ab Beverello:`,i=t.times?`<div class="tr-times">
           <span class="tr-times-label">${r}</span>
           <div class="tr-times-chips">${t.times.map(e=>`<span class="${e===t.timesHighlight?`hi`:``}">${e}</span>`).join(``)}</div>
         </div>${t.timesBack&&!t.isCombo?`<div class="tr-times">
                <span class="tr-times-label">🚌 Ab Amalfi → Flughafen:</span>
                <div class="tr-times-chips">${t.timesBack.map(e=>`<span class="${e.note.includes(`⚠`)?`warn`:e.note.includes(`✓`)?`hi`:``}">${e.t}${e.note?` `+e.note:``}</span>`).join(``)}</div>
              </div>`:``}`:``,o=t.isCombo?`<div class="tr-combo-legs">
           <div class="tr-combo-leg">
             <span class="tr-combo-icon">${t.comboOut.icon}</span>
             <div><span class="tr-combo-label">Hinfahrt</span><span class="tr-combo-detail">${t.comboOut.label} · ${t.comboOut.detail}</span></div>
           </div>
           <div class="tr-combo-leg">
             <span class="tr-combo-icon">${t.comboRet.icon}</span>
             <div><span class="tr-combo-label">Rückfahrt</span><span class="tr-combo-detail">${t.comboRet.label} · ${t.comboRet.detail}</span></div>
           </div>
         </div>`:`<div class="tr-route">${t.route}</div>
         <div class="tr-duration">⏱ ${t.duration}</div>`;n.innerHTML=`
      <div class="tr-top">
        <span class="tr-icon">${t.icon}</span>
        <div class="tr-name-wrap">
          <span class="tr-name">${t.name}</span>
          <span class="tr-badge ${t.badge.cls}">${t.badge.text}</span>
        </div>
      </div>
      ${o}
      ${i}
      <div class="tr-prices">
        <div class="tr-price-item"><span class="tr-plabel">${t.isCombo?`Fähre (hin)`:`Einfach`}</span><span class="tr-pval">${d(t.priceOne)}</span></div>
        <div class="tr-price-item accent"><span class="tr-plabel">Hin+Zurück</span><span class="tr-pval">${d(t.priceReturn)}</span></div>
      </div>
      <div class="tr-procon">
        <div class="tr-pro">✓ ${t.pro}</div>
        <div class="tr-con">✗ ${t.con}</div>
      </div>
      <div class="tr-footer">
        <span class="tr-platform">${t.platform}</span>
        <button class="tr-select">${c===t.id?`✓ Gewählt`:`Wählen`}</button>
      </div>
    `,n.addEventListener(`click`,()=>{c=c===t.id?null:t.id,localStorage.setItem(a,c??``),p(),m()}),e.appendChild(n)})}function m(){let e=r.find(e=>e.id===s),t=i.find(e=>e.id===c),n=e?e.price*2:0,a=t?t.priceReturn:0,o=parseFloat(document.getElementById(`b-hotel`).value)||0,l=o*7,u=parseFloat(document.getElementById(`b-misc`).value)||0,f=n+a+(o?l:0)+u;document.getElementById(`b-flights`).textContent=e?d(n):`—`,document.getElementById(`b-flights`).className=`b-val`+(e?``:` muted`);let p=document.getElementById(`b-transfer-val`);p.textContent=t?d(a):`—`,p.className=`b-val`+(t?``:` muted`);let m=document.getElementById(`b-hotel-sub`);m.textContent=o?`= ${d(l)} (7 Nächte)`:``,document.getElementById(`budget-label`).textContent=e?`${d(n)} Flüge`:`Flug &amp; Transfer wählen ↑`;let h=e||t||o||u;document.getElementById(`b-total`).textContent=h?d(f)+(o?``:` + Hotel`):`—`}var h=document.getElementById(`trip-notes`);h.value=localStorage.getItem(t)??``,h.addEventListener(`input`,()=>{localStorage.setItem(t,h.value)});function g(){let t=document.getElementById(`trip-list`),n=document.getElementById(`empty-state`);t.innerHTML=``,o.forEach(n=>{let r=u(n.from,n.to),i=document.createElement(`div`);i.className=`t-card`,i.innerHTML=`
      <button class="del-btn" title="Löschen">✕</button>
      <div class="t-dest">${n.destination}</div>
      <div class="t-dates">${l(n.from)} – ${l(n.to)}</div>
      ${r>0?`<div class="t-nights">${r} Nacht${r===1?``:`e`}</div>`:``}
      ${n.budget?`<div class="t-budget">Budget: ${d(n.budget)}</div>`:``}
      ${n.notes?`<div class="t-notes">${n.notes}</div>`:``}
    `,i.querySelector(`.del-btn`).addEventListener(`click`,t=>{t.stopPropagation(),o=o.filter(e=>e.id!==n.id),localStorage.setItem(e,JSON.stringify(o)),g()}),t.appendChild(i)}),n.style.display=o.length?`none`:``}document.getElementById(`trip-form`).addEventListener(`submit`,t=>{t.preventDefault(),o.push({id:crypto.randomUUID(),destination:document.getElementById(`destination`).value.trim(),from:document.getElementById(`date-from`).value,to:document.getElementById(`date-to`).value,budget:document.getElementById(`trip-budget`).value,notes:document.getElementById(`trip-notes-field`).value.trim()}),localStorage.setItem(e,JSON.stringify(o)),g(),t.target.reset(),document.getElementById(`destination`).focus()}),[`b-hotel`,`b-misc`].forEach(e=>{document.getElementById(e).addEventListener(`input`,m)}),f(),p(),m(),g();