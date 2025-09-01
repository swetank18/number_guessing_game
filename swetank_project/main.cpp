#include <iostream>
#include <fstream>
#include <string>
#include <ctime>

using namespace std;

// Get current date and time as string
string getCurrentDateTime() {
    time_t now = time(0);
    char buf[80];
    tm *ltm = localtime(&now);
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", ltm);
    return string(buf);
}

// Record a study session
void recordStudySlot() {
    string subject;
    string startTime, endTime;

    cout << "Enter subject: ";
    getline(cin, subject);

    cout << "Enter start time (e.g., 14:00): ";
    getline(cin, startTime);

    cout << "Enter end time (e.g., 15:30): ";
    getline(cin, endTime);

    ofstream file("study_log.txt", ios::app);
    if (file.is_open()) {
        file << "Date: " << getCurrentDateTime() << endl;
        file << "Subject: " << subject << endl;
        file << "Start Time: " << startTime << endl;
        file << "End Time: " << endTime << endl;
        file << "--------------------------" << endl;
        file.close();
        cout << "Study slot recorded successfully!\n";
    } else {
        cerr << "Failed to open file.\n";
    }
}

// Show all logged study sessions
void viewLogs() {
    ifstream file("study_log.txt");
    if (file.is_open()) {
        string line;
        while (getline(file, line)) {
            cout << line << endl;
        }
        file.close();
    } else {
        cerr << "No logs found.\n";
    }
}

int main() {
    int choice;

    while (true) {
        cout << "\n===== AI Study Planner =====\n";
        cout << "1. Record Study Slot\n";
        cout << "2. View Study Logs\n";
        cout << "3. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;
        cin.ignore(); // clear newline

        switch (choice) {
            case 1:
                recordStudySlot();
                break;
            case 2:
                viewLogs();
                break;
            case 3:
                cout << "Goodbye!\n";
                return 0;
            default:
                cout << "Invalid choice.\n";
        }
    }

    return 0;
}
