sw = new Stopwatch();

function Stopwatch() {
  // Private member
  let startTime, endTime, running, duration = 0;
  // To define a getter/setter, use Object.defineProperty():
  this.start = function() {
    if (running) {
      throw new Error("Stopwatch already running.");
    }
    running = true;
    startTime = new Date();
    console.log("Stopwatch had started.");
  };

  this.stop = function() {
    if (!running) {
      throw new Error("Stopwatch has already stopped.");
    }
    running = false;
    endTime = new Date();
    console.log("Stopwatch had stopped.");
    const runningTime = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += runningTime;
  };

  this.reset = function() {
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
  });
}
