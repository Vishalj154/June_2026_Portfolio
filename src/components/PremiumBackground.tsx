import BackgroundParticles from './BackgroundParticles';
import './PremiumBackground.css';

export default function PremiumBackground() {
  return (
    <div className="premium-bg" aria-hidden="true">
      <div className="premium-bg__base" />
      <div className="premium-bg__aurora premium-bg__aurora--1" />
      <div className="premium-bg__aurora premium-bg__aurora--2" />
      <div className="premium-bg__aurora premium-bg__aurora--3" />
      <div className="premium-bg__orb premium-bg__orb--1" />
      <div className="premium-bg__orb premium-bg__orb--2" />
      <div className="premium-bg__orb premium-bg__orb--3" />
      <div className="premium-bg__orb premium-bg__orb--4" />
      <div className="premium-bg__orb premium-bg__orb--5" />
      <div className="premium-bg__vignette" />
      <BackgroundParticles />
    </div>
  );
}
