import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { About, Contact, Gallery, Home, Reviews, Services } from '@/pages/Pages';

export default function App() {
  return <BrowserRouter><Layout><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/about" element={<About />} /><Route path="/gallery" element={<Gallery />} /><Route path="/reviews" element={<Reviews />} /><Route path="/contact" element={<Contact />} /></Routes></Layout></BrowserRouter>;
}
