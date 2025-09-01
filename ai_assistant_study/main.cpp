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
        subj.slots = max(1, static






