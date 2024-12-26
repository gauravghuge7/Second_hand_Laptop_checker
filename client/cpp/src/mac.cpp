#include <iostream>
#include <cstdlib>
#include <sys/sysctl.h>

void getCPUInfo() {
    std::cout << "\nCPU Information:\n";
    char cpu_model[256];
    size_t len = sizeof(cpu_model);
    sysctlbyname("machdep.cpu.brand_string", &cpu_model, &len, nullptr, 0);
    std::cout << "CPU Model: " << cpu_model << std::endl;
}

void getRAMInfo() {
    std::cout << "\nRAM Information:\n";
    int mib[2];
    mib[0] = CTL_HW;
    mib[1] = HW_MEMSIZE;
    int64_t ram_size;
    size_t length = sizeof(ram_size);
    sysctl(mib, 2, &ram_size, &length, nullptr, 0);
    std::cout << "Total RAM: " << ram_size / (1024 * 1024 * 1024) << " GB" << std::endl;
}

void getDiskInfo() {
    std::cout << "\nDisk Usage Information:\n";
    system("df -h");
}

void getOSInfo() {
    std::cout << "\nOperating System Information:\n";
    system("sw_vers");
}

void getNetworkInfo() {
    std::cout << "\nNetwork Information:\n";
    system("ifconfig");
}

int main() {
    std::cout << "macOS System Information:\n";
    getCPUInfo();
    getRAMInfo();
    getDiskInfo();
    getOSInfo();
    getNetworkInfo();
    return 0;
}
