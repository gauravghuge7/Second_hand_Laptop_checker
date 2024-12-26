#include <iostream>
#include <cstdlib>

void getCPUInfo() {
    std::cout << "\nCPU Information:\n";
    system("lscpu");
}

void getRAMInfo() {
    std::cout << "\nRAM Information:\n";
    system("free -h");
}

void getDiskInfo() {
    std::cout << "\nDisk Usage Information:\n";
    system("df -h");
}

void getOSInfo() {
    std::cout << "\nOperating System Information:\n";
    system("uname -a");
}

void getNetworkInfo() {
    std::cout << "\nNetwork Information:\n";
    system("ifconfig");
}

int main() {
    std::cout << "Linux System Information:\n";
    getCPUInfo();
    getRAMInfo();
    getDiskInfo();
    getOSInfo();
    getNetworkInfo();
    return 0;
}
