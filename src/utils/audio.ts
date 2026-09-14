// Self-contained Web Audio API cosmic ambience and UI bleeps
class CosmicAudioController {
  private ctx: AudioContext | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private isRunning: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public startAmbience() {
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      if (this.isRunning) return;

      const now = this.ctx.currentTime;
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.05, now + 2);

      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(140, now);

      // Deep space fundamental drone (55 Hz - A1)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(55, now);

      // Ethereal subtle sub-drone (82.4 Hz - E2)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'triangle';
      this.osc2.frequency.setValueAtTime(82.4, now);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
      this.isRunning = true;
    } catch {
      // Audio autoplay policy handled silently
    }
  }

  public stopAmbience() {
    try {
      if (!this.isRunning || !this.ctx || !this.gainNode) return;
      const now = this.ctx.currentTime;
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => {
        if (this.osc1) this.osc1.stop();
        if (this.osc2) this.osc2.stop();
        this.isRunning = false;
      }, 800);
    } catch {
      this.isRunning = false;
    }
  }

  public playSectorBlip(sectorIndex: number) {
    try {
      if (!this.ctx || this.ctx.state === 'suspended') return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const freq = freqs[sectorIndex % freqs.length] || 523.25;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.12);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Ignore
    }
  }
}

export const cosmicAudio = new CosmicAudioController();
