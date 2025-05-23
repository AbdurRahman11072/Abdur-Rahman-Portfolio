import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">© {currentYear} John Doe. All rights reserved.</p>
          </div>

          <div className="flex items-center text-sm text-foreground/70">
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
