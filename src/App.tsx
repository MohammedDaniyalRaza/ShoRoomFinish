import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { About, Contact, Gallery, Home, Reviews, Services } from '@/pages/Pages';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return <BrowserRouter basename="/"><Layout><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/about" element={<About />} /><Route path="/gallery" element={<Gallery />} /><Route path="/reviews" element={<Reviews />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Layout></BrowserRouter>;
}
