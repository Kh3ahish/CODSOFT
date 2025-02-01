"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, Calendar, Users, Gift, ChevronRight, MapPin, Utensils, Sun, Moon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

const specialArrangements = [
  { id: "birthday", label: "Geburtstag", icon: Gift },
  { id: "anniversary", label: "Jahrestag", icon: Gift },
  { id: "wedding", label: "Hochzeit", icon: Gift },
  { id: "office-party", label: "Firmenfeier", icon: Users },
]

const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]

export default function BuchungenPage() {
  const router = useRouter()
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("2")
  const [tablePreference, setTablePreference] = useState("default")
  const [specialArrangement, setSpecialArrangement] = useState<string[]>([])
  const [selectedArea, setSelectedArea] = useState("")
  const [isEvening, setIsEvening] = useState(false)

  const handleSpecialArrangement = (arrangement: string) => {
    setSpecialArrangement((prev) =>
      prev.includes(arrangement) ? prev.filter((a) => a !== arrangement) : [...prev, arrangement],
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <h1 className="text-2xl font-bold text-gray-800">Tisch reservieren</h1>
          <div className="w-10 h-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Reservierungsdetails</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="date" className="text-gray-700">
                Datum
              </Label>
              <div className="relative mt-1">
                <Input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </div>
            </div>
            <div>
              <Label htmlFor="time" className="text-gray-700">
                Uhrzeit
              </Label>
              <ScrollArea className="h-20 mt-1 rounded-xl border border-orange-200">
                <RadioGroup
                  id="time"
                  value={time}
                  onValueChange={(value) => {
                    setTime(value)
                    setIsEvening(Number.parseInt(value.split(":")[0]) >= 19)
                  }}
                  className="flex flex-wrap gap-2 p-2"
                >
                  {timeSlots.map((slot) => (
                    <div key={slot}>
                      <RadioGroupItem value={slot} id={`time-${slot}`} className="peer sr-only" />
                      <Label
                        htmlFor={`time-${slot}`}
                        className="flex items-center justify-center rounded-full border-2 border-orange-200 bg-white p-2 hover:bg-orange-100 hover:text-orange-600 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-500 peer-data-[state=checked]:text-white transition-all duration-200"
                      >
                        {slot}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </ScrollArea>
            </div>
            <div>
              <Label htmlFor="guests" className="text-gray-700">
                Anzahl der Gäste
              </Label>
              <div className="relative mt-1">
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-full pl-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl">
                    <SelectValue placeholder="Wählen Sie die Anzahl der Gäste" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Person" : "Personen"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </div>
            </div>
            <div>
              <Label htmlFor="table-preference" className="text-gray-700">
                Tischpräferenz
              </Label>
              <Select id="table-preference" value={tablePreference} onValueChange={setTablePreference}>
                <SelectTrigger className="w-full mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl">
                  <SelectValue placeholder="Wählen Sie Ihre Tischpräferenz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Standard (nach Verfügbarkeit)</SelectItem>
                  <SelectItem value="window">Fensterplatz</SelectItem>
                  <SelectItem value="quiet">Ruhiger Bereich</SelectItem>
                  <SelectItem value="bar">In der Nähe der Bar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-700">Besondere Anlässe</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {specialArrangements.map((arrangement) => (
                  <div key={arrangement.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={arrangement.id}
                      checked={specialArrangement.includes(arrangement.id)}
                      onCheckedChange={() => handleSpecialArrangement(arrangement.id)}
                      className="border-orange-200 text-orange-500 focus:ring-orange-500"
                    />
                    <label
                      htmlFor={arrangement.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center space-x-2"
                    >
                      <arrangement.icon className="w-4 h-4 text-orange-400" />
                      <span>{arrangement.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Tischauswahl</h2>
          <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden mb-4">
            <Image src="/restaurant-layout.jpg" alt="Restaurant Layout" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Interaktiver Sitzplan</p>
            </div>
            <motion.div
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
              animate={{ rotate: isEvening ? 180 : 0 }}
            >
              {isEvening ? <Moon className="text-indigo-600" /> : <Sun className="text-yellow-500" />}
            </motion.div>
          </div>
          <RadioGroup value={selectedArea} onValueChange={setSelectedArea} className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="main" id="main" className="peer sr-only" />
              <Label
                htmlFor="main"
                className="flex flex-col items-center justify-between rounded-xl border-2 border-orange-200 bg-white p-4 hover:bg-orange-50 hover:text-orange-600 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-500 peer-data-[state=checked]:text-white transition-all duration-200"
              >
                <Utensils className="mb-3 h-6 w-6" />
                Hauptbereich
              </Label>
            </div>
            <div>
              <RadioGroupItem value="terrace" id="terrace" className="peer sr-only" />
              <Label
                htmlFor="terrace"
                className="flex flex-col items-center justify-between rounded-xl border-2 border-orange-200 bg-white p-4 hover:bg-orange-50 hover:text-orange-600 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-500 peer-data-[state=checked]:text-white transition-all duration-200"
              >
                <MapPin className="mb-3 h-6 w-6" />
                Terrasse
              </Label>
            </div>
          </RadioGroup>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Zusätzliche Optionen</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-700 hover:text-orange-500">Menüvorauswahl</AccordionTrigger>
              <AccordionContent>
                Sie können Ihre Menüauswahl im Voraus treffen, um Ihre Wartezeit zu verkürzen.
                <Button className="mt-2" variant="outline">
                  Menü anzeigen
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-700 hover:text-orange-500">
                Besondere Anforderungen
              </AccordionTrigger>
              <AccordionContent>
                <textarea
                  className="w-full p-2 border rounded-xl border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Allergien, Diätanforderungen oder andere spezielle Wünsche"
                  rows={3}
                ></textarea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <Separator className="my-6" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Zusammenfassung</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-700">Datum:</span> {date || "Nicht ausgewählt"}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Uhrzeit:</span> {time || "Nicht ausgewählt"}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Gäste:</span> {guests}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Tischpräferenz:</span>{" "}
                {tablePreference === "default" ? "Standard" : tablePreference}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Bereich:</span> {selectedArea || "Nicht ausgewählt"}
              </p>
              {specialArrangement.length > 0 && (
                <p>
                  <span className="font-semibold text-gray-700">Besondere Anlässe:</span>{" "}
                  {specialArrangement.join(", ")}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t"
      >
        <Button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center"
          onClick={() => router.push("/payment")}
        >
          <span>Reservierung bestätigen</span>
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}

