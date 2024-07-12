package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * successRate / 100
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	carsPerMinute := CalculateWorkingCarsPerHour(productionRate, successRate) / 60.0
	return int(carsPerMinute)
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	groupedCars := uint(carsCount / 10)
	individualCars := uint(carsCount % 10)
	return groupedCars*95_000 + individualCars*10_000
}
