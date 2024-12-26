#include <iostream>
#include <cstdlib>

#if defined(__linux__)
    #include <unistd.h>
    #include <sys/utsname.h>
#elif defined(_WIN32)
    #include <windows.h>
    #include <sysinfoapi.h>
#elif defined(__APPLE__)
    #include <sys/sysctl.h>
#endif

// Function to get CPU information
void getCPUInfo() {
    std::cout << "\nCPU Information:\n";
    
#if defined(__linux__)
    system("lscpu");
#elif defined(_WIN32)
    SYSTEM_INFO siSysInfo;
    GetSystemInfo(&siSysInfo);
    std::cout << "Number of Processors: " << siSysInfo.dwNumberOfProcessors << std::endl;
#elif defined(__APPLE__)
    char cpu_model[256];
    size_t len = sizeof(cpu_model);
    sysctlbyname("machdep.cpu.brand_string", &cpu_model, &len, nullptr, 0);
    std::cout << "CPU Model: " << cpu_model << std::endl;
#endif
}

// Function to get RAM information
void getRAMInfo() {
    std::cout << "\nRAM Information:\n";
    
#if defined(__linux__)
    system("free -h");
#elif defined(_WIN32)
    MEMORYSTATUSEX statex;
    statex.dwLength = sizeof(statex);
    GlobalMemoryStatusEx(&statex);
    std::cout << "Total Physical Memory: " << statex.ullTotalPhys / (1024 * 1024) << " MB" << std::endl;
#elif defined(__APPLE__)
    int mib[2];
    mib[0] = CTL_HW;
    mib[1] = HW_MEMSIZE;
    int64_t ram_size;
    size_t length = sizeof(ram_size);
    sysctl(mib, 2, &ram_size, &length, nullptr, 0);
    std::cout << "Total RAM: " << ram_size / (1024 * 1024 * 1024) << " GB" << std::endl;
#endif
}

// Function to get Disk usage
void getDiskInfo() {
    std::cout << "\nDisk Usage Information:\n";
    
#if defined(__linux__)
    system("df -h");
#elif defined(_WIN32)
    system("wmic logicaldisk get caption, description, filesystem, size, freespace");
#elif defined(__APPLE__)
    system("df -h");
#endif
}

// Function to get OS information
void getOSInfo() {
    std::cout << "\nOperating System Information:\n";
    
#if defined(__linux__)
    system("uname -a");
#elif defined(_WIN32)
    std::cout << "Windows OS" << std::endl;
    system("systeminfo | findstr /B /C:\"OS\"");
#elif defined(__APPLE__)
    system("sw_vers");
#endif
}

// Function to get Network information
void getNetworkInfo() {
    std::cout << "\nNetwork Information:\n";
    
#if defined(__linux__)
    system("ifconfig");
#elif defined(_WIN32)
    system("ipconfig");
#elif defined(__APPLE__)
    system("ifconfig");
}

int main() {
    std::cout << "System Information:\n";
    getCPUInfo();
    getRAMInfo();
    getDiskInfo();
    getOSInfo();
    getNetworkInfo();
    return 0;
}
