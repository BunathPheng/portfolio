import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Contact from "../components/contact"

describe("Contact", () => {
  it("rejects an invalid email before submitting", () => {
    render(<Contact />)

    fireEvent.change(screen.getByPlaceholderText("Your name"), {
      target: { value: "Bunath" },
    })
    fireEvent.change(screen.getByPlaceholderText("Your email"), {
      target: { value: "invalid-email" },
    })
    fireEvent.change(screen.getByPlaceholderText("Subject"), {
      target: { value: "Project" },
    })
    fireEvent.change(screen.getByPlaceholderText("Your message"), {
      target: { value: "A sufficiently long message" },
    })
    fireEvent.submit(document.querySelector("form")!)

    expect(screen.getByText("Please enter a valid email.")).toBeInTheDocument()
  })
})
