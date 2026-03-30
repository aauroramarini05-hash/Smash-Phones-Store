const processors = [
  { name: 'Qualcomm Snapdragon 8 Gen 3', brand: 'Snapdragon', specs: '4nm · fino a 3.3 GHz · AI Engine' },
  { name: 'Qualcomm Snapdragon 7+ Gen 3', brand: 'Snapdragon', specs: '4nm · performance bilanciata' },
  { name: 'MediaTek Dimensity 9300', brand: 'MediaTek', specs: '4nm · octa-core flagship' },
  { name: 'MediaTek Dimensity 8300 Ultra', brand: 'MediaTek', specs: '4nm · gaming ready' },
  { name: 'Samsung Exynos 2400', brand: 'Exynos', specs: '4nm · Xclipse GPU' },
  { name: 'Unisoc T820', brand: 'Unisoc', specs: '6nm · fascia media efficiente' }
];

const ramOptions = ['512 MB', '1 GB', '2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '24 GB'];
const storageOptions = ['16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '2 TB'];
const sensors = [
  'Accelerometro',
  'Giroscopio',
  'Barometro',
  'Sensore di prossimità',
  'Bussola',
  'Sensore luce ambientale',
  'Impronte ottico',
  'Impronte ultrasonico',
  'Impronte laterale',
  'Face Unlock 3D',
  'NFC',
  'Sensore Hall',
  'UWB'
];

const state = {
  selectedSensors: new Set(['Accelerometro', 'Giroscopio', 'NFC']),
  cameraCount: 3
};

const el = {
  cpuSelect: document.getElementById('cpuSelect'),
  cpuSpecs: document.getElementById('cpuSpecs'),
  ramSelect: document.getElementById('ramSelect'),
  dynamicRam: document.getElementById('dynamicRam'),
  storageSelect: document.getElementById('storageSelect'),
  cameraCount: document.getElementById('cameraCount'),
  cameraCountLabel: document.getElementById('cameraCountLabel'),
  cameraList: document.getElementById('cameraList'),
  sensorList: document.getElementById('sensorList'),
  batteryInput: document.getElementById('batteryInput'),
  displaySize: document.getElementById('displaySize'),
  refreshRate: document.getElementById('refreshRate'),
  displayType: document.getElementById('displayType'),
  osSelect: document.getElementById('osSelect'),
  connectivitySelect: document.getElementById('connectivitySelect'),
  materialSelect: document.getElementById('materialSelect'),
  colorSelect: document.getElementById('colorSelect'),
  priceInput: document.getElementById('priceInput'),
  priceError: document.getElementById('priceError'),
  buildBtn: document.getElementById('buildBtn'),
  liveSpecs: document.getElementById('liveSpecs'),
  outputPanel: document.getElementById('outputPanel'),
  productCard: document.getElementById('productCard'),
  themeToggle: document.getElementById('themeToggle'),
  cameraTemplate: document.getElementById('cameraTemplate')
};

function fillSelect(select, data, mapper = (v) => v) {
  select.innerHTML = data.map((item, index) => `<option value="${index}">${mapper(item)}</option>`).join('');
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

function renderCameraInputs() {
  el.cameraList.innerHTML = '';
  for (let i = 0; i < state.cameraCount; i += 1) {
    const node = el.cameraTemplate.content.cloneNode(true);
    el.cameraList.appendChild(node);
  }
}

function getCameras() {
  return [...el.cameraList.querySelectorAll('.camera-item')].map((item, idx) => ({
    index: idx + 1,
    mp: item.querySelector('.camera-mp').value,
    type: item.querySelector('.camera-type').value
  }));
}

function getSelectedCpu() {
  return processors[Number(el.cpuSelect.value)];
}

function validatePrice() {
  const value = Number(el.priceInput.value);
  if (!Number.isFinite(value) || value < 1 || value > 2999) {
    el.priceError.textContent = 'Inserisci un prezzo valido tra 1€ e 2.999€.';
    return false;
  }
  el.priceError.textContent = '';
  return true;
}

function liveData() {
  const cpu = getSelectedCpu();
  return {
    cpu: `${cpu.brand} · ${cpu.name}`,
    ram: `${el.ramSelect.value}${el.dynamicRam.checked ? ' + RAM dinamica' : ''}`,
    storage: el.storageSelect.value,
    cameras: getCameras().map((cam) => `${cam.index}) ${cam.mp}MP ${cam.type}`).join(' · '),
    sensors: [...state.selectedSensors].join(', ') || 'Nessuno',
    battery: `${el.batteryInput.value} mAh`,
    display: `${el.displaySize.value}" ${el.displayType.value} @ ${el.refreshRate.value}`,
    os: el.osSelect.value,
    connectivity: el.connectivitySelect.value,
    materials: `${el.materialSelect.value} · ${el.colorSelect.value}`,
    price: `${Number(el.priceInput.value || 0).toLocaleString('it-IT')} €`
  };
}

function updateLiveSpecs() {
  const data = liveData();
  el.cpuSpecs.textContent = getSelectedCpu().specs;
  el.liveSpecs.innerHTML = Object.entries(data)
    .map(([k, v]) => `<div class="spec-item"><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`)
    .join('');
}

function generateName() {
  const prefixes = ['Nova', 'Pulse', 'Vertex', 'Zenith', 'Apex', 'Orbit'];
  const suffixes = ['Ultra', 'Pro', 'Max', 'Prime', 'Edge'];
  const p = prefixes[Math.floor(Math.random() * prefixes.length)];
  const s = suffixes[Math.floor(Math.random() * suffixes.length)];
  const n = Math.floor(10 + Math.random() * 90);
  return `${p} ${n} ${s}`;
}

function buildProductCard() {
  if (!validatePrice()) return;
  const data = liveData();
  const cameraLenses = new Array(state.cameraCount).fill('<div class="lens"></div>').join('');

  el.productCard.innerHTML = `
    <div class="phone-render">
      <div class="lens-grid">${cameraLenses}</div>
    </div>
    <div>
      <p class="eyebrow">Custom Build Ready</p>
      <h3 class="product-title">${generateName()}</h3>
      <div>
        <span class="badge">${getSelectedCpu().brand}</span>
        <span class="badge">${el.ramSelect.value}</span>
        <span class="badge">${el.storageSelect.value}</span>
        <span class="badge">${el.osSelect.value}</span>
      </div>
      <p class="price">${data.price}</p>
      <div class="spec-list">
        ${Object.entries(data)
          .filter(([key]) => key !== 'price')
          .map(([key, value]) => `<div class="spec-item"><span>${key.toUpperCase()}</span><strong>${value}</strong></div>`)
          .join('')}
      </div>
    </div>
  `;

  el.outputPanel.hidden = false;
  el.outputPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function init() {
  fillSelect(el.cpuSelect, processors, (cpu) => `${cpu.brand} • ${cpu.name}`);
  fillSelect(el.ramSelect, ramOptions);
  fillSelect(el.storageSelect, storageOptions);

  el.ramSelect.value = '8 GB';
  el.storageSelect.value = '256 GB';

  initSensors();
  renderCameraInputs();
  updateLiveSpecs();

  el.cameraCount.addEventListener('input', () => {
    state.cameraCount = Number(el.cameraCount.value);
    el.cameraCountLabel.textContent = `${state.cameraCount} fotocamere`;
    renderCameraInputs();
    updateLiveSpecs();
  });

  document.body.addEventListener('input', (event) => {
    if (event.target.closest('.camera-item') || event.target.matches('input, select')) {
      validatePrice();
      updateLiveSpecs();
    }
  });

  el.buildBtn.addEventListener('click', buildProductCard);

  el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    el.themeToggle.textContent = dark ? '☀️ Light' : '🌙 Dark';
  });
}

init();
