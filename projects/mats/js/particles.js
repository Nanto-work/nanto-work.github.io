(function() {
  var Field, Particle, init;

  Field = function(elem, opts) {
    var col, frag, maxDisplacement, opacityJitter, particle, particleClass, particleCount, particleOpts, particleSize, particleSpin, particleType, row, sizeJitter, x, y;
    particleCount = opts.particleCount || 100;
    particleSize = opts.particleSize || 20;
    particleClass = opts.particleClass;
    particleType = opts.particleType;
    particleSpin = opts.particleSpin;
    sizeJitter = opts.sizeJitter || null;
    opacityJitter = opts.opacityJitter || null;
    this.elem = elem;
    this.width = this.elem.offsetWidth;
    this.height = this.elem.offsetHeight;
    this.spacing = Math.floor(Math.sqrt(document.body.offsetWidth * document.body.offsetHeight / particleCount));
    maxDisplacement = opts.maxDisplacement || this.spacing;
    this.cols = Math.floor(this.width / this.spacing);
    this.rows = Math.floor(this.height / this.spacing);
    this.particles = [];
    frag = document.createDocumentFragment();
    row = 0;
    while (row < this.rows) {
      col = 0;
      while (col < this.cols) {
        x = (col + (.7 + Math.random())) * this.spacing;
        y = (row + (.2 + Math.random())) * this.spacing;
        particleOpts = {
          x: x,
          y: y,
          maxDisplacement: maxDisplacement,
          particleSize: particleSize,
          particleClass: particleClass,
          particleType: particleType,
          particleSpin: particleSpin,
          sizeJitter: sizeJitter,
          opacityJitter: opacityJitter
        };
        particle = new Particle(particleOpts);
        this.particles.push(particle);
        frag.appendChild(particle.elem);
        col++;
      }
      row++;
    }
    this.elem.appendChild(frag);
    window.addEventListener('mousemove', this, false);
  };

  Field.prototype.handleEvent = function(event) {
    var handler;
    handler = event.type + 'Handler';
    if (this[handler]) {
      this[handler](event);
    }
  };

  Field.prototype.mousemoveHandler = function(event) {
    var point;
    point = {
      x: event.pageX,
      y: event.pageY
    };
    this.eachParticleDo('reachFor', point);
  };

  Field.prototype.eachParticleDo = function(methodName) {
    var args, i, len, particle;
    particle = void 0;
    args = Array.prototype.slice.call(arguments, 1);
    i = 0;
    len = this.particles.length;
    while (i < len) {
      particle = this.particles[i];
      particle[methodName].apply(particle, args);
      i++;
    }
  };

  Particle = function(opts) {
    var opacityJitter, particleClass, particleSpin, particleType, sizeJitter, x, y;
    this.maxDisplacement = opts.maxDisplacement || 10;
    particleClass = opts.particleClass;
    particleType = opts.particleType;
    particleSpin = opts.particleSpin || null;
    sizeJitter = opts.sizeJitter || {
      min: 1,
      max: 1
    };
    opacityJitter = opts.opacityJitter || {
      min: 1,
      max: 1
    };
    x = opts.x;
    y = opts.y;
    this.elem = document.createElement('div');
    this.particleSize = Math.round(opts.particleSize * (1 / this.getRandomInt(sizeJitter.min, sizeJitter.max))) || 10;
    this.elem.style.width = this.particleSize + 'px';
    this.elem.style.height = this.particleSize + 'px';
    if (particleType === 'circle') {
      this.elem.style.borderRadius = this.particleSize * 0.5 + 'px';
    }
    if (particleType === 'sprite') {
      this.elem.style.backgroundSize = this.particleSize + 'px';
    }
    this.elem.style.position = 'absolute';
    this.elem.setAttribute('class', particleClass);
    this.origin = {
      x: x,
      y: y
    };
    this.position(x, y);
    if (opacityJitter) {
      this.setOpacity(opacityJitter);
    }
    if (particleSpin) {
      this.setSpin(particleSpin);
    }
  };

  Particle.prototype.setSpin = function(particleSpin) {
    this.elem.style.transform = 'rotate(' + this.getRandomInt(0, particleSpin) + 'deg)';
  };

  Particle.prototype.setOpacity = function(opacityJitter) {
    this.elem.style.opacity = 1 / this.getRandomInt(opacityJitter.min, opacityJitter.max);
  };

  Particle.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  Particle.prototype.position = function(x, y) {
    this.x = x;
    this.y = y;
    this.elem.style.left = (this.x - this.particleSize * 0.5) + 'px';
    this.elem.style.top = (this.y - this.particleSize * 0.5) + 'px';
  };

  Particle.prototype.reachFor = function(point) {
    var angle, distance, dx, dy, x, y;
    dx = point.x - this.origin.x;
    dy = point.y - this.origin.y;
    distance = Math.sqrt(dx * dx + dy * dy);
    distance = Math.min(distance, this.maxDisplacement);
    angle = Math.atan2(dy, dx);
    x = this.origin.x + Math.cos(angle) * distance;
    y = this.origin.y + Math.sin(angle) * distance;
    this.position(x, y);
  };

  init = function() {
    var farFieldOpts, icosaFarFieldOpts, icosaField, icosaNearFieldOpts, midFieldOpts, nearFieldOpts, starField;
    farFieldOpts = {
      particleSize: 10,
      particleCount: 200,
      maxDisplacement: 10,
      particleClass: 'star-particle',
      particleType: 'circle',
      sizeJitter: {
        min: 5,
        max: 7
      },
      opacityJitter: {
        min: 1.5,
        max: 4
      }
    };
    midFieldOpts = {
      particleSize: 20,
      particleCount: 20,
      maxDisplacement: 20,
      particleClass: 'star-particle',
      particleType: 'circle',
      sizeJitter: {
        min: 5,
        max: 7
      },
      opacityJitter: {
        min: 2,
        max: 5
      }
    };
    nearFieldOpts = {
      particleSize: 40,
      particleCount: 10,
      maxDisplacement: 40,
      particleClass: 'star-particle',
      particleType: 'circle',
      sizeJitter: {
        min: 5,
        max: 7
      },
      opacityJitter: {
        min: 3,
        max: 7
      }
    };
    starField = document.getElementById('js-particle-field');
    window.farField = new Field(starField, farFieldOpts);
    window.midField = new Field(starField, midFieldOpts);
    window.nearField = new Field(starField, nearFieldOpts);
    icosaFarFieldOpts = {
      particleSize: 100,
      particleCount: 15,
      maxDisplacement: 5,
      particleClass: 'icosa-particle',
      particleType: 'sprite',
      particleSpin: 360,
      sizeJitter: {
        min: 3,
        max: 9
      },
      opacityJitter: {
        min: 5,
        max: 8
      }
    };
    icosaNearFieldOpts = {
      particleSize: 200,
      particleCount: 7,
      maxDisplacement: 20,
      particleClass: 'icosa-particle',
      particleType: 'sprite',
      particleSpin: 360,
      sizeJitter: {
        min: 4,
        max: 7
      },
      opacityJitter: {
        min: 3,
        max: 7
      }
    };
    icosaField = document.getElementById('js-icosa-field');
    window.icosaFarField = new Field(icosaField, icosaFarFieldOpts);
    window.icosaNearField = new Field(icosaField, icosaNearFieldOpts);
  };

  window.addEventListener('load', init, false);

}).call(this);