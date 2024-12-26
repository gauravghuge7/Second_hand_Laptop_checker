#include <windows.h>
#include <iostream>
#include <cstdlib>
#include <sysinfoapi.h>

void getCPUInfo() {
   SYSTEM_INFO siSysInfo;
   GetSystemInfo(&siSysInfo);
   std::cout << "\nCPU Information:\n";
   std::cout << "Number of Processors: " << siSysInfo.dwNumberOfProcessors << std::endl;
}

void getRAMInfo() {
   MEMORYSTATUSEX statex;
   statex.dwLength = sizeof(statex);
   GlobalMemoryStatusEx(&statex);
   std::cout << "\nRAM Information:\n";
   std::cout << "Total Physical Memory: " << statex.ullTotalPhys / (1024 * 1024) << " MB" << std::endl;
   std::cout << "Available Physical Memory: " << statex.ullAvailPhys / (1024 * 1024) << " MB" << std::endl;
}

void getDiskInfo() {
   std::cout << "\nDisk Usage Information:\n";
   system("wmic logicaldisk get caption, description, filesystem, size, freespace");
}

void getOSInfo() {
   std::cout << "\nOperating System Information:\n";
   system("systeminfo | findstr /B /C:\"OS\"");
}

void getNetworkInfo() {
   std::cout << "\nNetwork Information:\n";
   system("ipconfig");
}

int main() {
   std::cout << "Windows System Information:\n";
   getCPUInfo();
   getRAMInfo();
   getDiskInfo();
   getOSInfo();
   getNetworkInfo();
   return 0;
}
