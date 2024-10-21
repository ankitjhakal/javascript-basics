function Stopwatch() {
  // Private member
  let startTime, endTime, running = false, duration = 0;
  // To define a getter/setter, use Object.defineProperty():

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; },
    set: function(value) { duration = value; }
  });
  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; }
  });
  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; }
  });
  Object.defineProperty(this, 'running', {
    get: function() { return running; }
  });
}

Stopwatch.prototype.start = function() {
  if (this.running) {
    throw new Error("Stopwatch already running.");
  }
  this.running = true;
  console.log(this.running);
  this.startTime = new Date();
  console.log("Stopwatch had started.");
};

Stopwatch.prototype.stop = function() {
  console.log(this.running);

  if (!this.running) {
    throw new Error("Stopwatch has already stopped.");
  }
  this.running = false;
  this.endTime = new Date();
  console.log("Stopwatch had stopped.");
  const runningTime = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += runningTime;
};

Stopwatch.prototype.reset = function() {
  this.running = false;
  this.duration = 0;
}
sw = new Stopwatch();
