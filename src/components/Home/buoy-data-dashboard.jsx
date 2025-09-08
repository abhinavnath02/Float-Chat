"use client"

import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Home/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Settings, Menu, BarChart3, ToggleLeft } from "lucide-react"

// Sample data matching the chart pattern from the image
const chartData = [
  { date: "6 Aug", value: 1008 },
  { date: "7 Aug", value: 1010 },
  { date: "8 Aug", value: 1009 },
  { date: "9 Aug", value: 1007 },
  { date: "10 Aug", value: 1006 },
  { date: "11 Aug", value: 1005 },
  { date: "12 Aug", value: 1003 },
  { date: "13 Aug", value: 1002 },
  { date: "14 Aug", value: 1001 },
  { date: "15 Aug", value: 1000 },
  { date: "16 Aug", value: 999 },
  { date: "17 Aug", value: 998 },
  { date: "18 Aug", value: 997 },
  { date: "19 Aug", value: 999 },
  { date: "20 Aug", value: 1001 },
  { date: "21 Aug", value: 1003 },
  { date: "22 Aug", value: 1005 },
  { date: "23 Aug", value: 1006 },
  { date: "24 Aug", value: 1007 },
  { date: "25 Aug", value: 1006 },
  { date: "26 Aug", value: 1005 },
]

export function BuoyDataDashboard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <span className="text-cyan-500 font-medium">Float:</span>
          <span className="font-semibold text-gray-900">IND0040</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Settings className="h-4 w-4 text-gray-500" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Menu className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <label className="text-sm text-cyan-500 font-medium mb-2 block">Select Parameter</label>
            <Select defaultValue="pressure">
              <SelectTrigger className="w-full bg-white border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className='bg-white' value="pressure">Pressure</SelectItem>
                <SelectItem className='bg-white' value="temperature">Temperature</SelectItem>
                <SelectItem className='bg-white' value="salinity">Salinity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <BarChart3 className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ToggleLeft className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Chart */}
        <Card className="p-4 bg-gray-50 border-0">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  domain={[995, 1010]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  ticks={[995, 1000, 1005, 1010]}
                />
                <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Metadata */}
        <div>
          <h3 className="text-cyan-500 font-medium mb-3">Metadata</h3>
          <Card className="p-4 bg-gray-100 border-0 space-y-2">
            <div className="text-sm">
              <span className="text-gray-600">Buoy ID:</span>
              <span className="ml-2 font-medium text-gray-900">AD06</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Latitude:</span>
              <span className="ml-2 font-medium text-gray-900">18.274011</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Longitude:</span>
              <span className="ml-2 font-medium text-gray-900">67.225067</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
