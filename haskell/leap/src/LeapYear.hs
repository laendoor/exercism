module LeapYear (isLeapYear) where

isDivBy :: Integer -> Integer -> Bool
isDivBy n m = n `mod` m == 0

isLeapYear :: Integer -> Bool
isLeapYear year = year `isDivBy` 400 || (year `isDivBy` 4 && not (year `isDivBy` 100))
