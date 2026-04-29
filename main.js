const TRIPS_KEY = 'urlaubsplanung_trips';
const NOTES_KEY = 'urlaubsplanung_notes';
const FLIGHT_KEY = 'urlaubsplanung_flight';

// ── Flight data · Skyscanner · So. 6. – Sa. 12. September 2026 ──
const FLIGHTS = [
  {
    id: 'opt-a',
    badge: { text: '⭐ Beste Wahl', cls: 'gold' },
    pick: true,
    out: { time: '07:00', arr: '08:40', arrOk: true,  airline: 'SWISS',           duration: '1h 40min' },
    ret: { time: '20:00', arr: '21:55',               airline: 'Helvetic Airways', duration: '1h 55min' },
    price: 172,
    tip: 'Früh in NAP (08:40) — Transfer nach Amalfi bequem möglich. Abends zurück, letzter Tag voll genossen. 8 % weniger CO₂.',
  },
  {
    id: 'opt-b',
    badge: { text: 'Nachmittags zurück', cls: 'blue' },
    pick: false,
    out: { time: '07:00', arr: '08:40', arrOk: true,  airline: 'SWISS',     duration: '1h 40min' },
    ret: { time: '14:50', arr: '16:40',               airline: 'airBaltic', duration: '1h 50min' },
    price: 198,
    tip: 'Frühe Ankunft (08:40), Transfer gut machbar. Am letzten Tag noch bis Mittag Zeit. 13 % weniger CO₂.',
  },
  {
    id: 'opt-c',
    badge: { text: 'Mittags an', cls: 'gray' },
    pick: false,
    out: { time: '12:20', arr: '14:00', arrOk: false, airline: 'airBaltic', duration: '1h 40min' },
    ret: { time: '14:50', arr: '16:40',               airline: 'airBaltic', duration: '1h 50min' },
    price: 281,
    tip: 'Ankunft erst 14:00 — Transfer nach Amalfi am Nachmittag. Rückflug ebenfalls nachmittags.',
  },
  {
    id: 'opt-d',
    badge: { text: '💰 Günstigste', cls: 'green' },
    pick: false,
    out: { time: '07:00', arr: '08:40', arrOk: true,  airline: 'SWISS', duration: '1h 40min' },
    ret: { time: '09:30', arr: '11:20',               airline: 'SWISS', duration: '1h 50min' },
    price: 172,
    tip: 'Frühe Ankunft, aber Rückflug 09:30 — letzter Morgen in Amalfi verloren. 17 % weniger CO₂.',
  },
  {
    id: 'opt-e',
    badge: { text: 'Später Hinflug', cls: 'gray' },
    pick: false,
    out: { time: '17:00', arr: '18:40', arrOk: false, airline: 'SWISS',     duration: '1h 40min' },
    ret: { time: '14:50', arr: '16:40',               airline: 'airBaltic', duration: '1h 50min' },
    price: 218,
    tip: 'Ankunft erst 18:40 — Transfer nach Amalfi abends. Dafür entspannter Rückflug am Nachmittag.',
  },
  {
    id: 'opt-f',
    badge: { text: 'Spät zurück', cls: 'blue' },
    pick: false,
    out: { time: '17:00', arr: '18:40', arrOk: false, airline: 'SWISS',           duration: '1h 40min' },
    ret: { time: '20:00', arr: '21:55',               airline: 'Helvetic Airways', duration: '1h 55min' },
    price: 191,
    tip: 'Ankunft erst abends, aber Rückflug 20:00 — letzter Tag bleibt fast komplett nutzbar.',
  },
];

// ── Transfer options NAP Flughafen → Amalfi ──
const TRANSFERS = [
  {
    id: 'tr-ferry',
    icon: '⛴️',
    name: 'Fähre (beide Wege)',
    badge: { text: '✨ Empfehlung', cls: 'gold' },
    route: 'Flughafen → Hafen Beverello → Amalfi',
    duration: '~2h total',
    priceOne: 74,
    priceReturn: 148,
    platform: 'NLG Ferries · Caremar',
    pro: 'Spektakuläre Aussicht auf die Küste vom Meer — das schönste Ankommen',
    con: 'Zwischenschritt: Flughafen → Hafen Beverello (~14 CHF). Fähre ~30 CHF p.P.',
    pick: false,
    times: ['08:35', '10:00', '10:45', '13:15', '15:20', '17:00'],
  },
  {
    id: 'tr-combo',
    icon: '⛴️',
    name: 'Fähre hin · Transfer zurück',
    badge: { text: '🎯 Top-Kombi', cls: 'gold' },
    route: 'Hin: Beverello → Amalfi (Fähre) · Zurück: Amalfi → Flughafen (privat)',
    duration: 'Hin ~2h · Zurück ~1h 18min',
    priceOne: 74,
    priceReturn: 155,
    platform: 'NLG Ferries + GetYourGuide',
    pro: 'Scenic Anreise übers Meer. Stressfreie Rückreise — direkt zum Flughafen, kein Hafen.',
    con: 'Fähre erfordert Zwischenschritt: Flughafen → Hafen Beverello (~14 CHF).',
    pick: true,
    isCombo: true,
    comboOut: { icon: '⛴️', label: 'Fähre', detail: 'Beverello → Amalfi · ~1h 45min' },
    comboRet: { icon: '🚕', label: 'Privater Transfer', detail: 'Amalfi → Flughafen · ~1h 18min' },
    times: ['08:35', '10:00', '10:45', '13:15', '15:20', '17:00'],
  },
  {
    id: 'tr-shared',
    icon: '🚐',
    name: 'Shared Shuttle',
    badge: { text: 'Bequem', cls: 'blue' },
    route: 'Direkt Flughafen → Amalfiküste',
    duration: '~1h 30min',
    priceOne: 74,
    priceReturn: 148,
    platform: 'GetYourGuide',
    pro: 'Kein Umsteigen, direkt vom Terminal abgeholt',
    con: 'Geteiltes Fahrzeug, ggf. kurze Wartezeit. Preis p.P. oder Gruppe vorab prüfen.',
    pick: false,
  },
  {
    id: 'tr-private',
    icon: '🚕',
    name: 'Privater Transfer',
    badge: { text: 'Exklusiv', cls: 'terra' },
    route: 'Direkt Flughafen → Amalfi, nur für euch',
    duration: '~1h 18min',
    priceOne: 81,
    priceReturn: 162,
    platform: 'GetYourGuide · GetTransfer',
    pro: 'Nur für euch, flexible Abfahrtszeit, direkte Abholung im Terminal',
    con: 'Etwas teurer als Shared. GetTransfer: Economy ab €84, Van ab €86.',
    pick: false,
  },
  {
    id: 'tr-bus',
    icon: '🚌',
    name: 'Pintour Shuttle',
    badge: { text: '💰 Günstigste', cls: 'green' },
    route: 'Direkt Flughafen → Amalfi (Piazza Flavio Gioia)',
    duration: '~1h 50min',
    priceOne: 44,
    priceReturn: 88,
    platform: 'Pintour · pintourbus.com · +39 335 691 0211',
    pro: '€20 p.P. = CHF ~44 für euch beide (einfach). Ihr landet 08:40 → Bus 10:00 → Amalfi ~11:50 ✓',
    con: 'Zurück: letzter sicherer Bus 15:20 → Flughafen 17:10 (für 20h-Flug). 17:50-Bus ist zu knapp!',
    pick: false,
    times: ['06:30', '10:00', '12:00', '15:00', '18:00', '21:00'],
    timesHighlight: '10:00',
    timesBack: [
      { t: '07:20', note: '' },
      { t: '09:20', note: '' },
      { t: '12:50', note: '' },
      { t: '15:20', note: '✓ sicher' },
      { t: '17:50', note: '⚠ knapp' },
    ],
  },
  {
    id: 'tr-bus-combo',
    icon: '🚌',
    name: 'Pintour hin · Transfer zurück',
    badge: { text: '💸 Günstigste Kombi', cls: 'green' },
    route: 'Hin: Flughafen → Amalfi (Bus) · Zurück: Amalfi → Flughafen (privat)',
    duration: 'Hin ~1h 50min · Zurück ~1h 18min',
    priceOne: 44,
    priceReturn: 125,
    platform: 'Pintour + GetYourGuide / GetTransfer',
    pro: 'Günstigste Kombination. Kein Zeitdruck am letzten Tag — privater Rücktransfer wann ihr wollt.',
    con: 'Hinfahrt: müsst den 10:00-Bus erwischen (genug Zeit nach 08:40-Landung). Pintour vorbuchen.',
    pick: false,
    isCombo: true,
    comboOut: { icon: '🚌', label: 'Pintour Shuttle', detail: 'Ab Flughafen 10:00 → Amalfi ~11:50' },
    comboRet: { icon: '🚕', label: 'Privater Transfer', detail: 'Amalfi → Flughafen · flexibel' },
    times: ['06:30', '10:00', '12:00', '15:00', '18:00', '21:00'],
    timesHighlight: '10:00',
  },
  {
    id: 'tr-taxi',
    icon: '🚖',
    name: 'Taxi',
    badge: { text: 'Flexibel', cls: 'gray' },
    route: 'Direkt Flughafen → Amalfi',
    duration: '~1h 18min',
    priceOne: 85,
    priceReturn: 170,
    platform: 'Direkt am Flughafen',
    pro: '24/7 verfügbar, keine Buchung nötig, sofort nach der Landung',
    con: 'In der Hochsaison Warteschlangen möglich',
    pick: false,
  },
];

// ── State ──
const TRANSFER_KEY = 'urlaubsplanung_transfer';
let trips = JSON.parse(localStorage.getItem(TRIPS_KEY) ?? '[]');
let selectedFlightId = localStorage.getItem(FLIGHT_KEY) ?? null;
let selectedTransferId = localStorage.getItem(TRANSFER_KEY) ?? null;

// ── Helpers ──
function fmtDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' });
}

function nights(from, to) {
  return Math.round((new Date(to) - new Date(from)) / 86400000);
}

function fmtChf(n) {
  return `CHF ${Number(n).toLocaleString('de-CH')}`;
}

// ── Render flights ──
function renderFlights() {
  const grid = document.getElementById('flight-grid');
  grid.innerHTML = '';

  FLIGHTS.forEach(f => {
    const card = document.createElement('div');
    card.className = `f-card${f.pick ? ' pick' : ''}${selectedFlightId === f.id ? ' selected' : ''}`;

    const arrTag = f.out.arrOk
      ? `<span class="arr-tag ok">✓ vor Mittag</span>`
      : `<span class="arr-tag warn">⚠ nach 12h</span>`;

    card.innerHTML = `
      <div class="f-card-top">
        <span class="f-badge ${f.badge.cls}">${f.badge.text}</span>
        ${arrTag}
      </div>
      <div class="f-leg">
        <span class="route">${f.out.time} ZRH <span class="arrow">→</span> NAP ${f.out.arr}</span>
        <span class="airline">${f.out.airline}</span>
      </div>
      <div class="f-leg"><span class="info">${f.out.duration} · Direktflug</span></div>
      <hr class="f-divider" />
      <div class="f-leg">
        <span class="route">${f.ret.time} NAP <span class="arrow">→</span> ZRH ${f.ret.arr}</span>
        <span class="airline">${f.ret.airline}</span>
      </div>
      <div class="f-leg"><span class="info">${f.ret.duration} · Direktflug</span></div>
      ${f.tip ? `<p class="f-tip">${f.tip}</p>` : ''}
      <div class="f-footer">
        <div class="f-price">
          <div><span class="chf">CHF</span><span class="amount">${f.price}</span><span class="pp">p.P.</span></div>
          <div class="total-pp">${fmtChf(f.price * 2)} für 2 Pers.</div>
        </div>
        <button class="f-select">${selectedFlightId === f.id ? '✓ Gewählt' : 'Wählen'}</button>
      </div>
    `;

    card.addEventListener('click', () => {
      selectedFlightId = selectedFlightId === f.id ? null : f.id;
      localStorage.setItem(FLIGHT_KEY, selectedFlightId ?? '');
      renderFlights();
      updateBudget();
    });

    grid.appendChild(card);
  });
}

// ── Render transfers ──
function renderTransfers() {
  const grid = document.getElementById('transfer-grid');
  grid.innerHTML = '';

  TRANSFERS.forEach(t => {
    const card = document.createElement('div');
    card.className = `tr-card${t.pick ? ' pick' : ''}${selectedTransferId === t.id ? ' selected' : ''}`;

    const isBus = t.id.startsWith('tr-bus');
    const timesLabel = isBus ? '🚌 Ab Flughafen (NAP):' : '⛴️ Ab Beverello:';
    const timesHtml = t.times
      ? `<div class="tr-times">
           <span class="tr-times-label">${timesLabel}</span>
           <div class="tr-times-chips">${t.times.map(h =>
             `<span class="${h === t.timesHighlight ? 'hi' : ''}">${h}</span>`
           ).join('')}</div>
         </div>${t.timesBack && !t.isCombo
           ? `<div class="tr-times">
                <span class="tr-times-label">🚌 Ab Amalfi → Flughafen:</span>
                <div class="tr-times-chips">${t.timesBack.map(e =>
                  `<span class="${e.note.includes('⚠') ? 'warn' : e.note.includes('✓') ? 'hi' : ''}">${e.t}${e.note ? ' ' + e.note : ''}</span>`
                ).join('')}</div>
              </div>`
           : ''}`
      : '';

    const comboLegsHtml = t.isCombo
      ? `<div class="tr-combo-legs">
           <div class="tr-combo-leg">
             <span class="tr-combo-icon">${t.comboOut.icon}</span>
             <div><span class="tr-combo-label">Hinfahrt</span><span class="tr-combo-detail">${t.comboOut.label} · ${t.comboOut.detail}</span></div>
           </div>
           <div class="tr-combo-leg">
             <span class="tr-combo-icon">${t.comboRet.icon}</span>
             <div><span class="tr-combo-label">Rückfahrt</span><span class="tr-combo-detail">${t.comboRet.label} · ${t.comboRet.detail}</span></div>
           </div>
         </div>`
      : `<div class="tr-route">${t.route}</div>
         <div class="tr-duration">⏱ ${t.duration}</div>`;

    card.innerHTML = `
      <div class="tr-top">
        <span class="tr-icon">${t.icon}</span>
        <div class="tr-name-wrap">
          <span class="tr-name">${t.name}</span>
          <span class="tr-badge ${t.badge.cls}">${t.badge.text}</span>
        </div>
      </div>
      ${comboLegsHtml}
      ${timesHtml}
      <div class="tr-prices">
        <div class="tr-price-item"><span class="tr-plabel">${t.isCombo ? 'Fähre (hin)' : 'Einfach'}</span><span class="tr-pval">${fmtChf(t.priceOne)}</span></div>
        <div class="tr-price-item accent"><span class="tr-plabel">Hin+Zurück</span><span class="tr-pval">${fmtChf(t.priceReturn)}</span></div>
      </div>
      <div class="tr-procon">
        <div class="tr-pro">✓ ${t.pro}</div>
        <div class="tr-con">✗ ${t.con}</div>
      </div>
      <div class="tr-footer">
        <span class="tr-platform">${t.platform}</span>
        <button class="tr-select">${selectedTransferId === t.id ? '✓ Gewählt' : 'Wählen'}</button>
      </div>
    `;

    card.addEventListener('click', () => {
      selectedTransferId = selectedTransferId === t.id ? null : t.id;
      localStorage.setItem(TRANSFER_KEY, selectedTransferId ?? '');
      renderTransfers();
      updateBudget();
    });

    grid.appendChild(card);
  });
}

// ── Budget ──
function updateBudget() {
  const flight   = FLIGHTS.find(f => f.id === selectedFlightId);
  const transfer = TRANSFERS.find(t => t.id === selectedTransferId);

  const flightCost   = flight   ? flight.price * 2   : 0;
  const transferCost = transfer ? transfer.priceReturn : 0;

  const hotelPerNight = parseFloat(document.getElementById('b-hotel').value) || 0;
  const hotelTotal    = hotelPerNight * 7;
  const misc          = parseFloat(document.getElementById('b-misc').value) || 0;

  const totalKnown = flightCost + transferCost + (hotelPerNight ? hotelTotal : 0) + misc;

  document.getElementById('b-flights').textContent = flight ? fmtChf(flightCost) : '—';
  document.getElementById('b-flights').className   = 'b-val' + (flight ? '' : ' muted');

  const tEl = document.getElementById('b-transfer-val');
  tEl.textContent = transfer ? fmtChf(transferCost) : '—';
  tEl.className   = 'b-val' + (transfer ? '' : ' muted');

  const hotelSub = document.getElementById('b-hotel-sub');
  hotelSub.textContent = hotelPerNight ? `= ${fmtChf(hotelTotal)} (7 Nächte)` : '';

  document.getElementById('budget-label').textContent =
    flight ? `${fmtChf(flightCost)} Flüge` : 'Flug &amp; Transfer wählen ↑';

  const hasData = flight || transfer || hotelPerNight || misc;
  document.getElementById('b-total').textContent = hasData
    ? fmtChf(totalKnown) + (!hotelPerNight ? ' + Hotel' : '')
    : '—';
}

// ── Notes ──
const notesEl = document.getElementById('trip-notes');
notesEl.value = localStorage.getItem(NOTES_KEY) ?? '';
notesEl.addEventListener('input', () => {
  localStorage.setItem(NOTES_KEY, notesEl.value);
});

// ── Other trips ──
function renderTrips() {
  const list = document.getElementById('trip-list');
  const empty = document.getElementById('empty-state');
  list.innerHTML = '';

  trips.forEach(t => {
    const n = nights(t.from, t.to);
    const card = document.createElement('div');
    card.className = 't-card';
    card.innerHTML = `
      <button class="del-btn" title="Löschen">✕</button>
      <div class="t-dest">${t.destination}</div>
      <div class="t-dates">${fmtDate(t.from)} – ${fmtDate(t.to)}</div>
      ${n > 0 ? `<div class="t-nights">${n} Nacht${n !== 1 ? 'e' : ''}</div>` : ''}
      ${t.budget ? `<div class="t-budget">Budget: ${fmtChf(t.budget)}</div>` : ''}
      ${t.notes ? `<div class="t-notes">${t.notes}</div>` : ''}
    `;
    card.querySelector('.del-btn').addEventListener('click', e => {
      e.stopPropagation();
      trips = trips.filter(x => x.id !== t.id);
      localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
      renderTrips();
    });
    list.appendChild(card);
  });

  empty.style.display = trips.length ? 'none' : '';
}

document.getElementById('trip-form').addEventListener('submit', e => {
  e.preventDefault();
  trips.push({
    id: crypto.randomUUID(),
    destination: document.getElementById('destination').value.trim(),
    from: document.getElementById('date-from').value,
    to: document.getElementById('date-to').value,
    budget: document.getElementById('trip-budget').value,
    notes: document.getElementById('trip-notes-field').value.trim(),
  });
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
  renderTrips();
  e.target.reset();
  document.getElementById('destination').focus();
});

['b-hotel', 'b-misc'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateBudget);
});

renderFlights();
renderTransfers();
updateBudget();
renderTrips();
