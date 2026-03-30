const CATALOG = {
  phone: {
    title: 'Telefono',
    subtitle: 'Configuratore smartphone completo',
    brands: ['Samsung', 'Xiaomi', 'realme', 'OnePlus', 'Nothing'],
    os: ['Android 12', 'Android 13', 'Android 14', 'Android 15'],
    connectivity: ['4G · Wi‑Fi 5 · Bluetooth 5.0', '5G · Wi‑Fi 6 · Bluetooth 5.2', '5G+ · Wi‑Fi 7 · Bluetooth 5.4'],
    sensors: ['Accelerometro', 'Giroscopio', 'Barometro', 'Prossimità', 'Bussola', 'NFC', 'UWB', 'Impronte'],
    cameras: true,
    cameraRange: [1, 7],
    powerLabel: 'Batteria / Alimentazione'
  },
  pc: {
    title: 'PC',
    subtitle: 'Configuratore PC/laptop reale con webcam',
    brands: ['ASUS', 'Acer', 'Lenovo', 'MSI', 'Dell', 'HP'],
    os: ['Windows 11 Home', 'Windows 11 Pro', 'Linux Ubuntu', 'FreeDOS'],
    connectivity: ['Wi‑Fi 6 · BT 5.2 · Ethernet', 'Wi‑Fi 6E · BT 5.3 · Ethernet 2.5G', 'Wi‑Fi 7 · BT 5.4 · Ethernet 2.5G'],
    sensors: ['Webcam privacy shutter', 'TPM 2.0', 'Fingerprint', 'Ambient light', 'IR Face Unlock'],
    cameras: true,
    cameraRange: [1, 1],
    powerLabel: 'Batteria (laptop) / PSU (desktop)'
  },
  tv: {
    title: 'TV',
    subtitle: 'Configuratore Smart TV realistico',
    brands: ['Samsung', 'LG', 'Sony', 'TCL', 'Hisense', 'Philips'],
    os: ['Google TV', 'Tizen', 'webOS', 'Android TV'],
    connectivity: ['Wi‑Fi 5 · BT 5.0 · HDMI 2.0', 'Wi‑Fi 6 · BT 5.2 · HDMI 2.1', 'Wi‑Fi 6E · BT 5.3 · HDMI 2.1 eARC'],
    sensors: ['Sensore luminosità', 'CEC HDMI', 'ALLM', 'VRR', 'Dolby Vision IQ'],
    cameras: false,
    cameraRange: [0, 0],
    powerLabel: 'Consumo / Alimentazione'
  }
};

const processors = [
  { brand: 'Snapdragon 4 Gen 2', tier: 'entry' }, { brand: 'Helio G85', tier: 'entry' }, { brand: 'Unisoc T606', tier: 'entry' },
  { brand: 'Snapdragon 6 Gen 1', tier: 'mid' }, { brand: 'Dimensity 7020', tier: 'mid' },
  { brand: 'Snapdragon 7+ Gen 3', tier: 'high' }, { brand: 'Dimensity 8300 Ultra', tier: 'high' },
  { brand: 'Snapdragon 8 Elite', tier: 'flagship' }, { brand: 'Dimensity 9300+', tier: 'flagship' },
  { brand: 'Intel Core i3-1315U', tier: 'entry' }, { brand: 'AMD Ryzen 3 7320U', tier: 'entry' },
  { brand: 'Intel Core i5-13420H', tier: 'mid' }, { brand: 'AMD Ryzen 5 7640HS', tier: 'mid' },
  { brand: 'Intel Core i7-14700HX', tier: 'high' }, { brand: 'AMD Ryzen 7 8845HS', tier: 'high' },
  { brand: 'Intel Core Ultra 9 185H', tier: 'flagship' }, { brand: 'AMD Ryzen 9 8945HS', tier: 'flagship' },
  { brand: 'MediaTek Pentonic 700', tier: 'entry' }, { brand: 'MediaTek Pentonic 1000', tier: 'mid' },
  { brand: 'Samsung NQ4 AI Gen2', tier: 'high' }, { brand: 'Sony Cognitive XR', tier: 'flagship' }
];

const gpus = [
  { brand: 'Mali G57', tier: 'entry' }, { brand: 'Adreno 610', tier: 'entry' },
  { brand: 'Adreno 710', tier: 'mid' }, { brand: 'Mali G68', tier: 'mid' },
  { brand: 'Adreno 720', tier: 'high' }, { brand: 'Mali G610', tier: 'high' },
  { brand: 'Adreno 830', tier: 'flagship' }, { brand: 'Xclipse 950', tier: 'flagship' },
  { brand: 'Intel UHD', tier: 'entry' }, { brand: 'Radeon 610M', tier: 'entry' },
  { brand: 'Intel Arc iGPU', tier: 'mid' }, { brand: 'GeForce RTX 4050', tier: 'mid' },
  { brand: 'GeForce RTX 4070', tier: 'high' }, { brand: 'Radeon RX 7800M', tier: 'high' },
  { brand: 'GeForce RTX 5090 Mobile', tier: 'flagship' }, { brand: 'Radeon RX 8900M', tier: 'flagship' },
  { brand: 'Mali TV GPU Gen1', tier: 'entry' }, { brand: 'Mali TV GPU Gen2', tier: 'mid' }, { brand: 'XR GPU Engine', tier: 'flagship' }
];

const ramOptions = ['2 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '24 GB', '32 GB', '64 GB'];
const dynamicRamOptions = ['2 GB', '4 GB', '6 GB', '8 GB', '10 GB', '12 GB', '14 GB', '16 GB'];
const storageOptions = ['32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '2 TB', '4 TB'];

const STORAGE_KEY = 'smash_store_multi_builder_v1';
const state = { productType: 'phone', cameraCount: 4, selectedSensors: new Set() };

const el = Object.fromEntries([
  'builderTitle','builderSubtitle','tierSelect','deviceBrand','deviceModel','cpuSelect','gpuSelect','cpuSpecs','gpuSpecs','brandStrip','ramSelect','dynamicRamToggle','dynamicRamSelect','storageSelect','storageType','cameraSec','cameraTitle','cameraCountLabelText','cameraCount','cameraCountLabel','cameraList','sensorList','batteryInput','chargeInput','wirelessCharge','displaySize','refreshRate','displayType','osSelect','connectivitySelect','coolingSelect','materialSelect','finishSelect','colorSelect','simSelect','audioSelect','protectionSelect','priceInput','autoPrice','priceError','saveConfigBtn','loadConfigBtn','buildBtn','liveSpecs','outputPanel','productCard','themeToggle'
].map((id)=>[id,document.getElementById(id)]));

const sideBtns = [...document.querySelectorAll('.side-btn')];
const cameraTemplate = document.getElementById('cameraTemplate');

const fillSimpleSelect = (s, list) => s.innerHTML = list.map(v => `<option>${v}</option>`).join('');
const fillTier = (s, list) => s.innerHTML = list.filter(x => x.tier === el.tierSelect.value).map((v,i)=>`<option value="${i}">${v.brand}</option>`).join('');
const tierCpu = () => processors.filter(x => x.tier === el.tierSelect.value);
const tierGpu = () => gpus.filter(x => x.tier === el.tierSelect.value);
const currentCPU = () => tierCpu()[Number(el.cpuSelect.value)] || tierCpu()[0];
const currentGPU = () => tierGpu()[Number(el.gpuSelect.value)] || tierGpu()[0];

function applyTypeConfig() {
  const cfg = CATALOG[state.productType];
  el.builderTitle.textContent = `Configura il tuo ${cfg.title}`;
  el.builderSubtitle.textContent = cfg.subtitle;
  fillSimpleSelect(el.deviceBrand, cfg.brands);
  fillSimpleSelect(el.osSelect, cfg.os);
  fillSimpleSelect(el.connectivitySelect, cfg.connectivity);
  state.selectedSensors = new Set(cfg.sensors.slice(0, Math.min(3, cfg.sensors.length)));
  el.cameraSec.hidden = !cfg.cameras;
  if (cfg.cameras) {
    el.cameraTitle.textContent = state.productType === 'pc' ? '🎥 Webcam' : '📸 Fotocamere';
    el.cameraCountLabelText.textContent = state.productType === 'pc' ? 'Webcam' : 'Numero fotocamere (1–7)';
    el.cameraCount.min = cfg.cameraRange[0];
    el.cameraCount.max = cfg.cameraRange[1];
    state.cameraCount = cfg.cameraRange[1];
    el.cameraCount.value = state.cameraCount;
    el.cameraCountLabel.textContent = state.productType === 'pc' ? '1 webcam' : `${state.cameraCount} fotocamere`;
    renderCameraInputs();
  } else {
    state.cameraCount = 0;
    el.cameraList.innerHTML = '';
  }
  renderSensors(cfg.sensors);
  refreshTierOptions();
}

function renderSensors(list) {
  el.sensorList.innerHTML = '';
  list.forEach(sensor => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `chip ${state.selectedSensors.has(sensor) ? 'active' : ''}`;
    chip.textContent = sensor;
    chip.addEventListener('click', () => {
      if (state.selectedSensors.has(sensor)) state.selectedSensors.delete(sensor); else state.selectedSensors.add(sensor);
      chip.classList.toggle('active');
      updateLiveSpecs();
    });
    el.sensorList.appendChild(chip);
  });
}

function renderCameraInputs() {
  el.cameraList.innerHTML = '';
  for (let i = 0; i < state.cameraCount; i++) {
    const node = cameraTemplate.content.cloneNode(true);
    const item = node.querySelector('.camera-item');
    item.querySelector('.camera-title').textContent = state.productType === 'pc' ? 'Webcam integrata' : `Fotocamera #${i + 1}`;
    item.querySelectorAll('.camera-adv').forEach(e => e.classList.toggle('hidden', i === 0 && state.productType === 'phone'));
    if (state.productType === 'pc') item.querySelector('.camera-type').value = 'Webcam';
    el.cameraList.appendChild(node);
  }
}

function cameraSummary() {
  if (state.productType === 'tv') return 'Nessuna camera';
  const cams = [...el.cameraList.querySelectorAll('.camera-item')];
  return cams.map((item, idx) => {
    const base = `${idx + 1}) ${item.querySelector('.camera-type').value} ${item.querySelector('.camera-mp').value}MP`;
    if (state.productType === 'pc') return `${base} · ${item.querySelector('.camera-video').value}`;
    if (idx === 0) return base;
    return `${base} · ${item.querySelector('.camera-aperture').value} · OIS:${item.querySelector('.camera-ois').value} · PDAF:${item.querySelector('.camera-pdaf').value}`;
  }).join(' || ');
}

function estimatePrice() {
  const tierBase = { entry: 150, mid: 450, high: 900, flagship: 1400 }[el.tierSelect.value];
  const typeBoost = { phone: 0, pc: 200, tv: 250 }[state.productType];
  const ram = ramOptions.indexOf(el.ramSelect.value) * 70;
  const storage = storageOptions.indexOf(el.storageSelect.value) * 60;
  return Math.min(2999, tierBase + typeBoost + ram + storage + state.selectedSensors.size * 12);
}

function validatePrice() {
  const v = Number(el.priceInput.value);
  const ok = Number.isFinite(v) && v >= 1 && v <= 2999;
  el.priceError.textContent = ok ? '' : 'Inserisci un prezzo valido tra 1€ e 2.999€.';
  return ok;
}

function collectData() {
  return {
    categoria: state.productType.toUpperCase(),
    prodotto: `${el.deviceBrand.value} ${el.deviceModel.value || 'Custom'}`,
    fascia: el.tierSelect.options[el.tierSelect.selectedIndex].text,
    cpu: currentCPU().brand,
    gpu: currentGPU().brand,
    ram: `${el.ramSelect.value}${el.dynamicRamToggle.checked ? ` + ${el.dynamicRamSelect.value} dinamica` : ''}`,
    storage: `${el.storageSelect.value} · ${el.storageType.value}`,
    cameras: cameraSummary(),
    sensors: [...state.selectedSensors].join(', ') || 'Nessuno',
    power: `${el.batteryInput.value} · ${el.chargeInput.value}W · ${el.wirelessCharge.value}`,
    display: `${el.displaySize.value}" ${el.displayType.value} @ ${el.refreshRate.value}`,
    os: el.osSelect.value,
    connectivity: el.connectivitySelect.value,
    design: `${el.materialSelect.value} · ${el.finishSelect.value} · ${el.colorSelect.value}`,
    price: `${Number(el.priceInput.value || 0).toLocaleString('it-IT')} €`
  };
}

function updateLiveSpecs() {
  const data = collectData();
  el.cpuSpecs.textContent = `Tier ${el.tierSelect.value}`;
  el.gpuSpecs.textContent = `Tier ${el.tierSelect.value}`;
  el.brandStrip.innerHTML = [`Tipo: ${state.productType.toUpperCase()}`, `Brand: ${el.deviceBrand.value}`, `CPU: ${currentCPU().brand}`, `GPU: ${currentGPU().brand}`].map(x => `<span class='logo-pill'>${x}</span>`).join('');
  el.autoPrice.value = `${estimatePrice().toLocaleString('it-IT')} €`;
  el.liveSpecs.innerHTML = Object.entries(data).map(([k,v]) => `<div class='spec-item'><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join('');
}

function refreshTierOptions() {
  fillTier(el.cpuSelect, processors);
  fillTier(el.gpuSelect, gpus);
  updateLiveSpecs();
}

function saveConfig() {
  const payload = { type: state.productType, tier: el.tierSelect.value, brand: el.deviceBrand.value, model: el.deviceModel.value, price: el.priceInput.value, sensors: [...state.selectedSensors], cameraCount: state.cameraCount };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadConfig() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  const s = JSON.parse(raw);
  state.productType = s.type || 'phone';
  sideBtns.forEach(b => b.classList.toggle('active', b.dataset.type === state.productType));
  applyTypeConfig();
  el.tierSelect.value = s.tier || 'mid';
  refreshTierOptions();
  el.deviceBrand.value = s.brand || el.deviceBrand.value;
  el.deviceModel.value = s.model || el.deviceModel.value;
  state.selectedSensors = new Set(s.sensors || [...state.selectedSensors]);
  renderSensors(CATALOG[state.productType].sensors);
  state.cameraCount = Number(s.cameraCount || state.cameraCount);
  if (CATALOG[state.productType].cameras) {
    el.cameraCount.value = state.cameraCount;
    renderCameraInputs();
  }
  el.priceInput.value = s.price || el.priceInput.value;
  updateLiveSpecs();
}

function buildCard() {
  if (!validatePrice()) return;
  const data = collectData();
  const lenses = new Array(Math.max(1, state.cameraCount)).fill('<div class="lens"></div>').join('');
  el.productCard.innerHTML = `<div class='phone-render'><div class='lens-grid'>${lenses}</div></div><div><p class='eyebrow'>Custom Build Ready</p><h3 class='product-title'>${el.deviceBrand.value} ${el.deviceModel.value}</h3><div><span class='badge'>${state.productType.toUpperCase()}</span><span class='badge'>${el.tierSelect.value}</span><span class='badge'>${currentCPU().brand}</span><span class='badge'>${currentGPU().brand}</span></div><p class='price'>${data.price}</p><div class='spec-list'>${Object.entries(data).filter(([k]) => k !== 'price').map(([k,v]) => `<div class='spec-item'><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join('')}</div></div>`;
  el.outputPanel.hidden = false;
  el.outputPanel.scrollIntoView({behavior:'smooth'});
}

function init() {
  fillSimpleSelect(el.ramSelect, ramOptions); fillSimpleSelect(el.dynamicRamSelect, dynamicRamOptions); fillSimpleSelect(el.storageSelect, storageOptions);
  el.ramSelect.value = '8 GB'; el.storageSelect.value = '256 GB';
  applyTypeConfig();

  sideBtns.forEach(btn => btn.addEventListener('click', () => {
    sideBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.productType = btn.dataset.type;
    applyTypeConfig();
  }));

  el.tierSelect.addEventListener('change', refreshTierOptions);
  el.cameraCount.addEventListener('input', () => {
    state.cameraCount = Number(el.cameraCount.value);
    el.cameraCountLabel.textContent = state.productType === 'pc' ? '1 webcam' : `${state.cameraCount} fotocamere`;
    renderCameraInputs();
    updateLiveSpecs();
  });
  el.dynamicRamToggle.addEventListener('change', () => { el.dynamicRamSelect.disabled = !el.dynamicRamToggle.checked; updateLiveSpecs(); });
  document.body.addEventListener('input', (e) => { if (e.target.matches('input, select')) { validatePrice(); updateLiveSpecs(); } });
  el.saveConfigBtn.addEventListener('click', saveConfig);
  el.loadConfigBtn.addEventListener('click', loadConfig);
  el.buildBtn.addEventListener('click', buildCard);
  el.themeToggle.addEventListener('click', () => { document.body.classList.toggle('dark'); el.themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark'; });
}

init();
