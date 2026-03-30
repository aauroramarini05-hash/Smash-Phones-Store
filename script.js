const processors = [
  { brand: 'Snapdragon', name: '8 Elite', specs: '3nm · Oryon class · flagship 2026' },
  { brand: 'Snapdragon', name: '8 Gen 3', specs: '4nm · 1x3.3GHz + 5x3.2GHz + 2x2.3GHz' },
  { brand: 'Snapdragon', name: '8 Gen 2', specs: '4nm · premium high-end' },
  { brand: 'Snapdragon', name: '8s Gen 3', specs: '4nm · flagship efficiency' },
  { brand: 'Snapdragon', name: '7+ Gen 3', specs: '4nm · premium mid-range' },
  { brand: 'Snapdragon', name: '7 Gen 3', specs: '4nm · balanced perf/watt' },
  { brand: 'Snapdragon', name: '7s Gen 2', specs: '4nm · value upper-mid' },
  { brand: 'Snapdragon', name: '6 Gen 1', specs: '4nm · mainstream efficient' },
  { brand: 'MediaTek', name: 'Dimensity 9400', specs: '3nm · all big-core architecture' },
  { brand: 'MediaTek', name: 'Dimensity 9300+', specs: '4nm · high-end AI NPU' },
  { brand: 'MediaTek', name: 'Dimensity 9300', specs: '4nm · octa-core flagship' },
  { brand: 'MediaTek', name: 'Dimensity 8400', specs: '4nm · sub-flagship' },
  { brand: 'MediaTek', name: 'Dimensity 8300 Ultra', specs: '4nm · gaming-oriented' },
  { brand: 'MediaTek', name: 'Dimensity 7300', specs: '4nm · power-saving profile' },
  { brand: 'MediaTek', name: 'Dimensity 7200', specs: '4nm · battery-focused' },
  { brand: 'MediaTek', name: 'Helio G99 Ultra', specs: '6nm · budget gaming' },
  { brand: 'Samsung Exynos', name: '2500', specs: '3nm · next-gen Xclipse' },
  { brand: 'Samsung Exynos', name: '2400', specs: '4nm · Xclipse GPU · flagship' },
  { brand: 'Samsung Exynos', name: '1480', specs: '4nm · upper-mid tier' },
  { brand: 'Samsung Exynos', name: '1380', specs: '5nm · balanced mid-range' },
  { brand: 'Google Tensor', name: 'G4', specs: '4nm · advanced AI features' },
  { brand: 'Google Tensor', name: 'G3', specs: '4nm · ML-centric pipeline' },
  { brand: 'Unisoc', name: 'T820', specs: '6nm · efficient performance' },
  { brand: 'Unisoc', name: 'T760', specs: '6nm · 5G entry advanced' },
  { brand: 'Unisoc', name: 'T750', specs: '6nm · budget 5G' }
];

const gpus = [
  { brand: 'Adreno', name: '830', specs: 'Ray tracing Gen2 · flagship' },
  { brand: 'Adreno', name: '750', specs: 'Ray tracing · elite tier' },
  { brand: 'Adreno', name: '740', specs: 'High-end stable FPS' },
  { brand: 'Adreno', name: '735', specs: 'High efficiency flagship-lite' },
  { brand: 'Adreno', name: '720', specs: 'Upper mid-range stable' },
  { brand: 'Mali', name: 'G925 MC12', specs: 'New-gen flagship graphics' },
  { brand: 'Mali', name: 'G720 MC12', specs: 'Flagship graphics cluster' },
  { brand: 'Mali', name: 'G715 MC10', specs: 'Solid high tier' },
  { brand: 'Mali', name: 'G615 MC6', specs: 'Balanced premium tier' },
  { brand: 'Mali', name: 'G610 MC4', specs: 'Mid-tier gaming' },
  { brand: 'Xclipse', name: '950', specs: 'RDNA mobile next-gen' },
  { brand: 'Xclipse', name: '940', specs: 'RDNA-based mobile graphics' },
  { brand: 'Immortalis', name: 'G925', specs: 'HW ray tracing support' },
  { brand: 'Immortalis', name: 'G720', specs: 'High-end tracing pipeline' },
  { brand: 'PowerVR', name: 'B-Series', specs: 'Efficiency-focused design' }
];

const ramOptions = ['512 MB', '1 GB', '2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '24 GB'];
const dynamicRamOptions = ['2 GB', '4 GB', '6 GB', '8 GB', '10 GB', '12 GB', '14 GB', '16 GB'];
const storageOptions = ['16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '2 TB'];
const connectivityOptions = [
  '4G · Wi‑Fi 5 · Bluetooth 5.0',
  '5G · Wi‑Fi 6 · Bluetooth 5.2',
  '5G · Wi‑Fi 6E · Bluetooth 5.3',
  '5G+ · Wi‑Fi 7 · Bluetooth 5.4',
  '5G mmWave · Wi‑Fi 7E · Bluetooth 6.0 ready'
];
const sensors = [
  'Accelerometro', 'Giroscopio', 'Barometro', 'Sensore di prossimità', 'Bussola', 'Sensore luce ambientale',
  'Impronte ottico', 'Impronte ultrasonico', 'Impronte laterale', 'Face Unlock 3D', 'Sensore temperatura',
  'NFC', 'UWB', 'Sensore Hall', 'IR Blaster', 'LiDAR-like depth', 'Magnetometro', 'Heart-rate sensor'
];

const state = { cameraCount: 4, selectedSensors: new Set(['Accelerometro', 'Giroscopio', 'NFC', 'Face Unlock 3D']) };

const el = {
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
  buildBtn: document.getElementById('buildBtn'),
  liveSpecs: document.getElementById('liveSpecs'),
  outputPanel: document.getElementById('outputPanel'),
  productCard: document.getElementById('productCard'),
  themeToggle: document.getElementById('themeToggle'),
  cameraTemplate: document.getElementById('cameraTemplate')
};

const fillSelect = (select, list, mapper = (v) => v) => {
  select.innerHTML = list.map((item, i) => `<option value="${i}">${mapper(item)}</option>`).join('');
};

const getCPU = () => processors[Number(el.cpuSelect.value)];
const getGPU = () => gpus[Number(el.gpuSelect.value)];

function updateBrandStrip() {
  const cpu = getCPU();
  const gpu = getGPU();
  el.brandStrip.innerHTML = [`CPU: ${cpu.brand}`, `GPU: ${gpu.brand}`, 'Android', '5G Ready']
    .map((x) => `<span class="logo-pill">${x}</span>`)
    .join('');
}

function initSensors() {
  el.sensorList.innerHTML = '';
  sensors.forEach((sensor) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `chip ${state.selectedSensors.has(sensor) ? 'active' : ''}`;
    chip.textContent = sensor;
    chip.addEventListener('click', () => {
      if (state.selectedSensors.has(sensor)) state.selectedSensors.delete(sensor);
      else state.selectedSensors.add(sensor);
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
  const cpuIdx = Number(el.cpuSelect.value);
  const gpuIdx = Number(el.gpuSelect.value);
  const ramWeight = ramOptions.indexOf(el.ramSelect.value) * 40;
  const storageWeight = storageOptions.indexOf(el.storageSelect.value) * 55;
  const cameraWeight = state.cameraCount * 45;
  const sensorWeight = state.selectedSensors.size * 8;
  const dynamicWeight = el.dynamicRamToggle.checked ? Number(el.dynamicRamSelect.value) * 8 : 0;
  return Math.min(2999, Math.max(300, 300 + cpuIdx * 36 + gpuIdx * 24 + ramWeight + storageWeight + cameraWeight + sensorWeight + dynamicWeight));
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
  const cpu = getCPU();
  const gpu = getGPU();
  const dyn = el.dynamicRamToggle.checked ? ` + ${el.dynamicRamSelect.value} RAM dinamica` : '';
  return {
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

function updateLiveSpecs() {
  const data = collectData();
  el.cpuSpecs.textContent = getCPU().specs;
  el.gpuSpecs.textContent = getGPU().specs;
  updateBrandStrip();
  el.autoPrice.value = `${estimatePrice().toLocaleString('it-IT')} €`;
  el.liveSpecs.innerHTML = Object.entries(data).map(([k, v]) => `<div class="spec-item"><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join('');
}

const deviceName = () => `${['Nova', 'Pulse', 'Nebula', 'Astra', 'Vortex', 'Vertex'][Math.floor(Math.random() * 6)]} ${Math.floor(20 + Math.random() * 80)} ${['Ultra', 'Pro', 'Prime', 'Edge', 'Max'][Math.floor(Math.random() * 5)]}`;

function buildCard() {
  if (!validatePrice()) return;
  const data = collectData();
  const lenses = new Array(state.cameraCount).fill('<div class="lens"></div>').join('');
  el.productCard.innerHTML = `
    <div class="phone-render"><div class="lens-grid">${lenses}</div></div>
    <div>
      <p class="eyebrow">Custom Build Ready</p>
      <h3 class="product-title">${deviceName()}</h3>
      <div>
        <span class="badge">${getCPU().brand}</span><span class="badge">${getGPU().brand}</span><span class="badge">${el.ramSelect.value}</span><span class="badge">${el.storageSelect.value}</span><span class="badge">${el.osSelect.value}</span>
      </div>
      <p class="price">${data.price}</p>
      <div class="spec-list">${Object.entries(data).filter(([k]) => k !== 'price').map(([k, v]) => `<div class="spec-item"><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join('')}</div>
    </div>`;
  el.outputPanel.hidden = false;
  el.outputPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function init() {
  fillSelect(el.cpuSelect, processors, (cpu) => `${cpu.brand} ${cpu.name}`);
  fillSelect(el.gpuSelect, gpus, (gpu) => `${gpu.brand} ${gpu.name}`);
  fillSelect(el.ramSelect, ramOptions);
  fillSelect(el.dynamicRamSelect, dynamicRamOptions);
  fillSelect(el.storageSelect, storageOptions);
  fillSelect(el.connectivitySelect, connectivityOptions);

  el.ramSelect.value = '8 GB';
  el.dynamicRamSelect.value = '8 GB';
  el.storageSelect.value = '256 GB';
  el.connectivitySelect.selectedIndex = 2;

  initSensors();
  renderCameraInputs();
  updateLiveSpecs();

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

  document.body.addEventListener('input', (event) => {
    if (event.target.matches('input, select')) {
      validatePrice();
      updateLiveSpecs();
    }
  });

  el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    el.themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
  });

  el.buildBtn.addEventListener('click', buildCard);
}

init();
