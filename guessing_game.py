"""
Number Guessing Game 🎲

How to Play:
-------------
1. Choose a difficulty:
   - Easy: Guess a number between 1 and 50
   - Medium: Guess a number between 1 and 100
   - Hard: Guess a number between 1 and 200
2. Try to guess the secret number chosen by the computer.
3. After each guess, you’ll get a hint:
   - "Too High" → your guess is larger than the number.
   - "Too Low" → your guess is smaller than the number.
4. If you make 5 wrong guesses, you'll get an extra hint (a number range).
5. The game tracks your attempts, best score, and win/loss record.
6. You can replay until you choose to exit.
"""

import random

# Global scoreboard
scoreboard = {
    "wins": 0,
    "losses": 0,
    "high_score": None
}

def show_menu():
    """Display main menu options."""
    print("\n=== 🎯 Number Guessing Game Menu ===")
    print("1. Play Game")
    print("2. View Scoreboard")
    print("3. Exit")

def choose_difficulty():
    """Let the player choose difficulty and return number range."""
    print("\nChoose Difficulty Level:")
    print("1. Easy (1–50)")
    print("2. Medium (1–100)")
    print("3. Hard (1–200)")

    while True:
        choice = input("Enter your choice (1-3): ").strip()
        if choice == "1":
            return 1, 50
        elif choice == "2":
            return 1, 100
        elif choice == "3":
            return 1, 200
        else:
            print("⚠️ Invalid choice! Please enter 1, 2, or 3.")

def play_game():
    """Play one round of the guessing game."""
    low, high = choose_difficulty()
    number_to_guess = random.randint(low, high)
    attempts = 0
    wrong_guesses = 0

    print(f"\n🎮 I have picked a number between {low} and {high}. Try to guess it!")

    while True:
        try:
            guess = int(input("Enter your guess: "))
            attempts += 1

            if guess < low or guess > high:
                print(f"⚠️ Please enter a number between {low} and {high}.")
                continue

            if guess < number_to_guess:
                print("Too Low! Try again.")
                wrong_guesses += 1
            elif guess > number_to_guess:
                print("Too High! Try again.")
                wrong_guesses += 1
            else:
                print(f"🎉 Correct! The number was {number_to_guess}.")
                print(f"You guessed it in {attempts} attempts.")
                scoreboard["wins"] += 1

                # Update high score
                if scoreboard["high_score"] is None or attempts < scoreboard["high_score"]:
                    scoreboard["high_score"] = attempts
                    print(f"🏆 New High Score: {attempts} attempts!\n")
                return

            # Give a range hint after 5 wrong guesses
            if wrong_guesses == 5:
                hint_low = max(low, number_to_guess - 10)
                hint_high = min(high, number_to_guess + 10)
                print(f"💡 Hint: The number is between {hint_low} and {hint_high}.")

        except ValueError:
            print("⚠️ Invalid input! Please enter a valid number.")

def view_scoreboard():
    """Display the scoreboard with wins, losses, and high score."""
    print("\n=== 📊 Scoreboard ===")
    print(f"Wins: {scoreboard['wins']}")
    print(f"Losses: {scoreboard['losses']}")
    if scoreboard["high_score"]:
        print(f"Best Score: {scoreboard['high_score']} attempts")
    else:
        print("Best Score: None yet")

def main():
    """Main program loop with menu."""
    while True:
        show_menu()
        choice = input("Enter your choice (1-3): ").strip()

        if choice == "1":
            play_game()
        elif choice == "2":
            view_scoreboard()
        elif choice == "3":
            print("\n👋 Thanks for playing! Goodbye.")
            break
        else:
            print("⚠️ Invalid choice! Please select 1, 2, or 3.")

if __name__ == "__main__":
    main()
