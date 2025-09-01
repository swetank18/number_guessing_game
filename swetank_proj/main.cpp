#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <iomanip>
#include <map>

using namespace std;

struct Subject {
    string name;
    int chapters;
    int difficulty; // 1 (easy) to 5 (hard)
    int slots = 0;
};

struct StudySession {
    string subjectName;
    int day; // 0=Mon ... 6=Sun
    int slotNum;
    int minutesStudied = 0;
};

const int DAYS = 7;
const string daysOfWeek[DAYS] = {"Mon","Tue","Wed","Thu","Fri","Sat","Sun"};

vector<Subject> loadSyllabus(const string& filename) {
    vector<Subject> subjects;
    ifstream file(filename);
    if (!file.is_open()) {
        cout << "Error: Cannot open file: " << filename << endl;
        exit(1);
    }
    string line;
    while (getline(file, line)) {
        if (line.empty()) continue;
        stringstream ss(line);
        Subject subj;
        getline(ss, subj.name, ',');
        string temp;
        getline(ss, temp, ',');
        subj.chapters = stoi(temp);
        getline(ss, temp, ',');
        subj.difficulty = stoi(temp);
        subjects.push_back(subj);
    }
    file.close();
    return subjects;
}

void suggestSlots(vector<Subject>& subjects, int totalSlots) {
    int sumWeight = 0;
    for (const auto& subj : subjects) {
        sumWeight += subj.chapters * subj.difficulty;
    }
    for (auto& subj : subjects) {
        subj.slots = max(1, static_cast<int>(1.0 * subj.chapters * subj.difficulty * totalSlots / sumWeight));
    }
}

vector<vector<string>> buildTimetable(const vector<Subject>& subjects, int slotsPerDay) {
    vector<vector<string>> timetable(DAYS);
    vector<string> slots;
    for (const auto& subj : subjects) {
        for (int i = 0; i < subj.slots; ++i) {
            slots.push_back(subj.name);
        }
    }
    size_t idx = 0;
    for (int day = 0; day < DAYS && idx < slots.size(); ++day) {
        for (int slot = 0; slot < slotsPerDay && idx < slots.size(); ++slot) {
            timetable[day].push_back(slots[idx++]);
        }
    }
    return timetable;
}

void recordStudySessions(vector<vector<string>>& timetable,
                        int slotsPerDay,
                        vector<StudySession>& sessions) {
    cout << "\n=== Enter minutes actually studied for each session ===\n";
    for (int day = 0; day < DAYS; ++day) {
        for (int slot = 0; slot < timetable[day].size(); ++slot) {
            cout << daysOfWeek[day]
                << " Slot " << (slot+1) << " (" << timetable[day][slot] << "): ";
            int mins;
            cin >> mins;
            sessions.push_back({timetable[day][slot], day, slot+1, mins});
        }
    }
}

void summarizeStudySessions(const vector<StudySession>& sessions) {
    map<string, int> subjectTotals;
    for (const auto& session : sessions) {
        subjectTotals[session.subjectName] += session.minutesStudied;
    }
    cout << "\n=== Study Summary ===\n";
    cout << left << setw(16) << "Subject" << "Total Minutes\n";
    cout << "--------------------------\n";
    for (const auto& pair : subjectTotals) {
        cout << left << setw(16) << pair.first << pair.second << endl;
    }
}

int main() {
    string filename;
    cout << "Enter syllabus filename (e.g., syllabus.txt): ";
    cin >> filename;

    vector<Subject> subjects = loadSyllabus(filename);
    cout << "\nLoaded Syllabus:\n";
    for (auto& s : subjects) {
        cout << "- " << s.name << " | Chapters: " << s.chapters << " | Difficulty: " << s.difficulty << endl;
    }

    int slotsPerDay;
    cout << "\nHow many study slots per day? ";
    cin >> slotsPerDay;

    int totalSlots = DAYS * slotsPerDay;
    suggestSlots(subjects, totalSlots);

    cout << "\nSuggested slots per subject:\n";
    for (auto& s : subjects) {
        cout << "- " << s.name << ": " << s.slots << " slot(s)\n";
    }

    auto timetable = buildTimetable(subjects, slotsPerDay);

    cout << "\n== AUTO-GENERATED STUDY TIMETABLE ==\n";
    for (int day = 0; day < DAYS; ++day) {
        cout << daysOfWeek[day] << ": ";
        for (const auto& subj : timetable[day]) {
            cout << subj << " | ";
        }
        cout << endl;
    }

    vector<StudySession> sessions;
    recordStudySessions(timetable, slotsPerDay, sessions);
    summarizeStudySessions(sessions);

    cout << "\nTip: Log your real sessions each week to track your study progress!\n";
    return 0;
}
