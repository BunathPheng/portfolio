import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

vi.mock("framer-motion", () => ({
  motion: new Proxy(
    {},
    {
      get: () => "div",
    }
  ),
  useInView: () => true,
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
}))

class TestIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", TestIntersectionObserver)
HTMLCanvasElement.prototype.getContext = vi.fn(() => null) as never
