const phoneBrands = ['Samsung', 'Xiaomi', 'Redmi', 'POCO', 'realme', 'OPPO', 'vivo', 'OnePlus', 'Nokia', 'Motorola', 'Nothing', 'Honor', 'Infinix', 'Tecno'];

const processors = [
  { brand: 'Snapdragon', name: '4 Gen 2', tier: 'entry', specs: '4nm · entry 5G' },
  { brand: 'Snapdragon', name: '680', tier: 'entry', specs: '6nm · basic daily use' },
  { brand: 'MediaTek', name: 'Helio G85', tier: 'entry', specs: '12nm · entry gaming' },
  { brand: 'MediaTek', name: 'Helio G99', tier: 'entry', specs: '6nm · strong budget' },
  { brand: 'Unisoc', name: 'T606', tier: 'entry', specs: '12nm · budget 4G' },
  { brand: 'Unisoc', name: 'T616', tier: 'entry', specs: '12nm · entry plus' },
  { brand: 'Dimensity', name: '6100+', tier: 'mid', specs: '6nm · budget 5G' },
  { brand: 'Dimensity', name: '7020', tier: 'mid', specs: '6nm · balanced 5G' },
  { brand: 'Snapdragon', name: '6 Gen 1', tier: 'mid', specs: '4nm · mainstream efficient' },
  { brand: 'Snapdragon', name: '7s Gen 2', tier: 'mid', specs: '4nm · value upper-mid' },
  { brand: 'Dimensity', name: '7200', tier: 'high', specs: '4nm · battery-focused' },
  { brand: 'Dimensity', name: '8300 Ultra', tier: 'high', specs: '4nm · gaming-oriented' },
  { brand: 'Snapdragon', name: '7+ Gen 3', tier: 'high', specs: '4nm · premium mid-range' },
  { brand: 'Exynos', name: '1480', tier: 'high', specs: '4nm · upper-mid tier' },
  { brand: 'Snapdragon', name: '8 Gen 2', tier: 'flagship', specs: '4nm · premium high-end' },
  { brand: 'Snapdragon', name: '8 Gen 3', tier: 'flagship', specs: '4nm · flagship class' },
  { brand: 'Snapdragon', name: '8 Elite', tier: 'flagship', specs: '3nm · top-tier 2026' },
  { brand: 'Dimensity', name: '9300+', tier: 'flagship', specs: '4nm · flagship AI' },
  { brand: 'Exynos', name: '2500', tier: 'flagship', specs: '3nm · next-gen Xclipse' },
  { brand: 'Tensor', name: 'G4', tier: 'flagship', specs: '4nm · advanced AI features' }
];

const gpus = [
  { brand: 'Mali', name: 'G57', tier: 'entry', specs: 'entry graphics' },
  { brand: 'Adreno', name: '610', tier: 'entry', specs: 'stable entry 3D' },
  { brand: 'PowerVR', name: 'GE8320', tier: 'entry', specs: 'low-end efficient' },
  { brand: 'Mali', name: 'G68', tier: 'mid', specs: 'budget-mid performance' },
  { brand: 'Adreno', name: '710', tier: 'mid', specs: 'mid-range smooth UI' },
  { brand: 'Mali', name: 'G610', tier: 'high', specs: 'high mid-tier gaming' },
  { brand: 'Adreno', name: '720', tier: 'high', specs: 'upper mid-range stable' },
  { brand: 'Mali', name: 'G720', tier: 'high', specs: 'premium tier graphics' },
  { brand: 'Adreno', name: '740', tier: 'flagship', specs: 'high-end stable FPS' },
  { brand: 'Adreno', name: '750', tier: 'flagship', specs: 'ray tracing elite' },
  { brand: 'Adreno', name: '830', tier: 'flagship', specs: 'next-gen flagship' },
  { brand: 'Xclipse', name: '950', tier: 'flagship', specs: 'RDNA mobile next-gen' }
];

const ramOptions = ['512 MB', '1 GB', '2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '24 GB'];
const dynamicRamOptions = ['2 GB', '4 GB', '6 GB', '8 GB', '10 GB', '12 GB', '14 GB', '16 GB'];
const storageOptions = ['16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '2 TB'];
const connectivityOptions = ['4G · Wi‑Fi 5 · Bluetooth 5.0', '5G · Wi‑Fi 6 · Bluetooth 5.2', '5G · Wi‑Fi 6E · Bluetooth 5.3', '5G+ · Wi‑Fi 7 · Bluetooth 5.4'];
const sensors = ['Accelerometro', 'Giroscopio', 'Barometro', 'Sensore di prossimità', 'Bussola', 'Sensore luce ambientale', 'Impronte ottico', 'Impronte ultrasonico', 'Impronte laterale', 'Face Unlock 3D', 'NFC', 'UWB', 'IR Blaster', 'Magnetometro'];

const STORAGE_KEY = 'smash_phones_builder_config_v1';
const state = { cameraCount: 4, selectedSensors: new Set(['Accelerometro', 'Giroscopio', 'NFC']) };

const el = {
  tierSelect: document.getElementById('tierSelect'),
  phoneBrand: document.getElementById('phoneBrand'),
  phoneModel: document.getElementById('phoneModel'),
  cpuSelect: document.getElementById('cpuSelect'),
  gpuSelect: document.getElementById('gpuSelect'),
  cpuSpecs: document.getElementById('cpuSpecs'),
  gpuSpecs: document.getElementById('gpuSpecs'),
  brandStrip: document.getElementById('brandStrip'),
  ramSelect: document.getElementById('ramSelect'),
  dynamicRamToggle: document.getElementById('dynamicRamToggle'),
  dynamicRamSelect: document.getElementById('dynamicRamSelect'),
  storageSelect: document.getElementById('storageSelect'),
  storageType: document.getElementById('storageType'),
  cameraCount: document.getElementById('cameraCount'),
  cameraCountLabel: document.getElementById('cameraCountLabel'),
  cameraList: document.getElementById('cameraList'),
  sensorList: document.getElementById('sensorList'),
  batteryInput: document.getElementById('batteryInput'),
  chargeInput: document.getElementById('chargeInput'),
  wirelessCharge: document.getElementById('wirelessCharge'),
  displaySize: document.getElementById('displaySize'),
  refreshRate: document.getElementById('refreshRate'),
  displayType: document.getElementById('displayType'),
  osSelect: document.getElementById('osSelect'),
  connectivitySelect: document.getElementById('connectivitySelect'),
  coolingSelect: document.getElementById('coolingSelect'),
  materialSelect: document.getElementById('materialSelect'),
  finishSelect: document.getElementById('finishSelect'),
  colorSelect: document.getElementById('colorSelect'),
  simSelect: document.getElementById('simSelect'),
  audioSelect: document.getElementById('audioSelect'),
  protectionSelect: document.getElementById('protectionSelect'),
  priceInput: document.getElementById('priceInput'),
  autoPrice: document.getElementById('autoPrice'),
  priceError: document.getElementById('priceError'),
  saveConfigBtn: document.getElementById('saveConfigBtn'),
  loadConfigBtn: document.getElementById('loadConfigBtn'),
  buildBtn: document.getElementById('buildBtn'),
  liveSpecs: document.getElementById('liveSpecs'),
  outputPanel: document.getElementById('outputPanel'),
  productCard: document.getElementById('productCard'),
  themeToggle: document.getElementById('themeToggle'),
  cameraTemplate: document.getElementById('cameraTemplate')
};

const fillSelect = (select, list, mapper = (v) => v) => { select.innerHTML = list.map((item, i) => `<option value="${i}">${mapper(item)}</option>`).join(''); };
const fillSimpleSelect = (select, list) => { select.innerHTML = list.map((item) => `<option>${item}</option>`).join(''); };

function getTierItems(arr) { return arr.filter((x) => x.tier === el.tierSelect.value); }
function currentCpu() { return getTierItems(processors)[Number(el.cpuSelect.value)] || getTierItems(processors)[0]; }
function currentGpu() { return getTierItems(gpus)[Number(el.gpuSelect.value)] || getTierItems(gpus)[0]; }

function refreshTierDependentOptions() {
  fillSelect(el.cpuSelect, getTierItems(processors), (x) => `${x.brand} ${x.name}`);
  fillSelect(el.gpuSelect, getTierItems(gpus), (x) => `${x.brand} ${x.name}`);
  updateLiveSpecs();
}

function updateBrandStrip() {
  const cpu = currentCpu();
  const gpu = currentGpu();
  el.brandStrip.innerHTML = [`Tier: ${el.tierSelect.options[el.tierSelect.selectedIndex].text}`, `Brand: ${el.phoneBrand.value}`, `CPU: ${cpu.brand}`, `GPU: ${gpu.brand}`]
    .map((x) => `<span class="logo-pill">${x}</span>`).join('');
}

function initSensors() {
  el.sensorList.innerHTML = '';
  sensors.forEach((sensor) => {
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

function applyCameraMode(cameraNode, idx) {
  cameraNode.querySelector('.camera-title').textContent = `Fotocamera #${idx + 1}`;
  cameraNode.querySelectorAll('.camera-adv').forEach((row) => row.classList.toggle('hidden', idx === 0));
}

function renderCameraInputs() {
  el.cameraList.innerHTML = '';
  for (let i = 0; i < state.cameraCount; i += 1) {
    const node = el.cameraTemplate.content.cloneNode(true);
    applyCameraMode(node.querySelector('.camera-item'), i);
    el.cameraList.appendChild(node);
  }
}

function readCamera(item, idx) {
  const base = `${idx + 1}) ${item.querySelector('.camera-type').value} ${item.querySelector('.camera-mp').value}MP`;
  if (idx === 0) return base;
  return `${base} · ${item.querySelector('.camera-aperture').value} · Sensor ${item.querySelector('.camera-sensor-size').value}" · OIS:${item.querySelector('.camera-ois').value} · PDAF:${item.querySelector('.camera-pdaf').value} · Zoom ${item.querySelector('.camera-zoom').value}x · ${item.querySelector('.camera-pixel').value}μm · ${item.querySelector('.camera-video').value}`;
}
const getCameraSummary = () => [...el.cameraList.querySelectorAll('.camera-item')].map(readCamera).join(' || ');

function estimatePrice() {
  const tierWeight = { entry: 120, mid: 300, high: 550, flagship: 850 }[el.tierSelect.value];
  const cameraWeight = state.cameraCount * 40;
  const sensorWeight = state.selectedSensors.size * 8;
  const ramWeight = ramOptions.indexOf(el.ramSelect.value) * 35;
  const storageWeight = storageOptions.indexOf(el.storageSelect.value) * 45;
  const dynamicWeight = el.dynamicRamToggle.checked ? Number(el.dynamicRamSelect.value) * 8 : 0;
  return Math.min(2999, Math.max(99, tierWeight + cameraWeight + sensorWeight + ramWeight + storageWeight + dynamicWeight));
}

function validatePrice() {
  const price = Number(el.priceInput.value);
  if (!Number.isFinite(price) || price < 1 || price > 2999) {
    el.priceError.textContent = 'Inserisci un prezzo valido tra 1€ e 2.999€.';
    return false;
  }
  el.priceError.textContent = '';
  return true;
}

function collectData() {
  const cpu = currentCpu();
  const gpu = currentGpu();
  const dyn = el.dynamicRamToggle.checked ? ` + ${el.dynamicRamSelect.value} RAM dinamica` : '';
  return {
    telefono: `${el.phoneBrand.value} ${el.phoneModel.value || 'Custom'}`,
    fascia: el.tierSelect.options[el.tierSelect.selectedIndex].text,
    cpu: `${cpu.brand} ${cpu.name}`,
    gpu: `${gpu.brand} ${gpu.name}`,
    ram: `${el.ramSelect.value}${dyn}`,
    storage: `${el.storageSelect.value} · ${el.storageType.value}`,
    cameras: getCameraSummary(),
    sensors: [...state.selectedSensors].join(', ') || 'Nessuno',
    battery: `${el.batteryInput.value} mAh · ${el.chargeInput.value}W · Wireless ${el.wirelessCharge.value}`,
    display: `${el.displaySize.value}" ${el.displayType.value} @ ${el.refreshRate.value}`,
    os: el.osSelect.value,
    connectivity: el.connectivitySelect.value,
    thermal: el.coolingSelect.value,
    design: `${el.materialSelect.value} · ${el.finishSelect.value} · ${el.colorSelect.value}`,
    extras: `${el.simSelect.value} · ${el.audioSelect.value} · ${el.protectionSelect.value}`,
    price: `${Number(el.priceInput.value || 0).toLocaleString('it-IT')} €`
  };
}

function saveConfig() {
  const payload = {
    tier: el.tierSelect.value,
    brand: el.phoneBrand.value,
    model: el.phoneModel.value,
    ram: el.ramSelect.value,
    dynamicToggle: el.dynamicRamToggle.checked,
    dynamicValue: el.dynamicRamSelect.value,
    storage: el.storageSelect.value,
    price: el.priceInput.value,
    sensors: [...state.selectedSensors],
    cameraCount: state.cameraCount
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadConfig() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  const saved = JSON.parse(raw);
  el.tierSelect.value = saved.tier || 'mid';
  refreshTierDependentOptions();
  el.phoneBrand.value = saved.brand || el.phoneBrand.value;
  el.phoneModel.value = saved.model || el.phoneModel.value;
  el.ramSelect.value = saved.ram || el.ramSelect.value;
  el.dynamicRamToggle.checked = !!saved.dynamicToggle;
  el.dynamicRamSelect.disabled = !saved.dynamicToggle;
  el.dynamicRamSelect.value = saved.dynamicValue || el.dynamicRamSelect.value;
  el.storageSelect.value = saved.storage || el.storageSelect.value;
  el.priceInput.value = saved.price || el.priceInput.value;
  state.cameraCount = Number(saved.cameraCount || state.cameraCount);
  el.cameraCount.value = state.cameraCount;
  el.cameraCountLabel.textContent = `${state.cameraCount} fotocamere`;
  state.selectedSensors = new Set(saved.sensors || [...state.selectedSensors]);
  initSensors();
  renderCameraInputs();
  updateLiveSpecs();
}

function updateLiveSpecs() {
  const data = collectData();
  el.cpuSpecs.textContent = currentCpu().specs;
  el.gpuSpecs.textContent = currentGpu().specs;
  el.autoPrice.value = `${estimatePrice().toLocaleString('it-IT')} €`;
  updateBrandStrip();
  el.liveSpecs.innerHTML = Object.entries(data).map(([k, v]) => `<div class="spec-item"><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join('');
}

const deviceName = () => `${el.phoneBrand.value} ${el.phoneModel.value || 'Custom'} ${['Lite', 'Plus', 'Pro', 'Ultra'][Math.floor(Math.random() * 4)]}`;

function buildCard() {
  if (!validatePrice()) return;
  const data = collectData();
  const lenses = new Array(state.cameraCount).fill('<div class="lens"></div>').join('');
  el.productCard.innerHTML = `<div class="phone-render"><div class="lens-grid">${lenses}</div></div><div><p class="eyebrow">Custom Build Ready</p><h3 class="product-title">${deviceName()}</h3><div><span class="badge">${currentCpu().brand}</span><span class="badge">${currentGpu().brand}</span><span class="badge">${el.tierSelect.value}</span><span class="badge">${el.ramSelect.value}</span></div><p class="price">${data.price}</p><div class="spec-list">${Object.entries(data).filter(([k]) => k !== 'price').map(([k, v]) => `<div class="spec-item"><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join('')}</div></div>`;
  el.outputPanel.hidden = false;
  el.outputPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function init() {
  fillSimpleSelect(el.phoneBrand, phoneBrands);
  fillSimpleSelect(el.ramSelect, ramOptions);
  fillSimpleSelect(el.dynamicRamSelect, dynamicRamOptions);
  fillSimpleSelect(el.storageSelect, storageOptions);
  fillSimpleSelect(el.connectivitySelect, connectivityOptions);
  el.phoneBrand.value = 'Samsung';
  el.ramSelect.value = '8 GB';
  el.dynamicRamSelect.value = '8 GB';
  el.storageSelect.value = '256 GB';

  initSensors();
  renderCameraInputs();
  refreshTierDependentOptions();
  loadConfig();

  el.tierSelect.addEventListener('change', refreshTierDependentOptions);
  el.cameraCount.addEventListener('input', () => {
    state.cameraCount = Number(el.cameraCount.value);
    el.cameraCountLabel.textContent = `${state.cameraCount} fotocamere`;
    renderCameraInputs();
    updateLiveSpecs();
  });
  el.dynamicRamToggle.addEventListener('change', () => {
    el.dynamicRamSelect.disabled = !el.dynamicRamToggle.checked;
    updateLiveSpecs();
  });
  document.body.addEventListener('input', (e) => {
    if (e.target.matches('input, select')) { validatePrice(); updateLiveSpecs(); }
  });

  el.saveConfigBtn.addEventListener('click', saveConfig);
  el.loadConfigBtn.addEventListener('click', loadConfig);
  el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    el.themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
  });
  el.buildBtn.addEventListener('click', buildCard);
}

init();
