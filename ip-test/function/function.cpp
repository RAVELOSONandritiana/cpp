#ifndef __FUNCTION_CPP__
#define __FUNCTION_CPP__

string bin(string number)
{
    char *binary = (char *)malloc(sizeof(number.size()));
    sprintf(binary,"%b",stoi(number));
    number = string(binary);
    int taille = number.size();
    for(int i = 0;i < 8-taille;i++)
    {
        number = "0" + number;
    }
    return number;
}

bool testEachNumberInIp(string ip)
{
    string tmp = "";
    int cpt = 0;
    for(char c : ip)
    {
        if(c == '.')
        {
            if(isnumber(tmp) == true && (stoi(tmp) >= 0 && stoi(tmp) <= 255))
            {
                cpt++;
            }
            else
            {
                return false;
            }
            tmp = "";
        }
        else
        {
            tmp += c;
        }
    }
    if(isnumber(tmp) == true && (stoi(tmp) >= 0 && stoi(tmp) <= 255))
    {
        cpt++;
    }
    return cpt == 4?true:false;
}

bool isnumber(string number)
{
    int cpt = 0;
    for(char c : number)
    {
        if (isdigit(c))
        {
            cpt++;
        }
    }
    return cpt == (int)number.size() ? true:false;
}

string binAdresse(string adresse)
{
    string res = "";
    string tmp = "";
    for(char c:adresse)
    {
        if(c == '.')
        {
            if(isnumber(tmp) == true && (stoi(tmp) >= 0 && stoi(tmp) <= 255))
            {
                res += bin(tmp);
                res += ".";
                tmp = "";
            }
        }
        else{
            tmp += c;
        }
    }
    if(isnumber(tmp) == true && (stoi(tmp) >= 0 && stoi(tmp) <= 255))
    {
        res += bin(tmp);
    }
    return res;
}

bool anding(string ip,string msq)
{
    ip = binAdresse(ip);
    msq = binAdresse(msq);
    string reseau = "";
    for(int i = 0;i < ip.size();i++)
    {
        if(ip[i] != '.')
        {
            reseau += ip[i]&msq[i];
        }
        else
        {
            reseau += ".";
        }
    }
    cout << reseau << endl;
    return false;
}

string getAndingBinaire(string ip,string msq)
{
    ip = binAdresse(ip);
    msq = binAdresse(msq);
    string reseau = "";
    for(int i = 0;i < ip.size();i++)
    {
        if(ip[i] != '.')
        {
            reseau += ip[i]&msq[i];
        }
        else
        {
            reseau += ".";
        }
    }
    return reseau;
}

string adresseReseau(string ip,string msq)
{
    return binAdresseToDecimal(getAndingBinaire(ip,msq));
}

string binAdresseToDecimal(string bin)
{
    string res = "";
    string tmp = "";
    for(char c : bin){
        if(c == '.')
        {
            if(isnumber(tmp) == true)
            {
                res += to_string(binToDec(tmp));
                res += ".";
                tmp = "";
            }
        }
        else
        {
            tmp += c;
        }
    }
    if(isnumber(tmp) == true)
    {
        res += to_string(binToDec(tmp));
    }
    return res;
}

int binToDec(string bin)
{
    int cpt = 0;
    int i = (int)bin.size()-1;
    for(char c : bin){
        cpt += (c - 48) * pow(2,i--);
    }
    return cpt;
}

string getBitReseauToAdresseIp(int num)
{
    string bin = "";
    int cpt = 0;
    for(int i = 0;i < 32;i++)
    {
        if(i < num)
        {
            bin += "1";
        }
        else
        {
            bin += "0";
        }
        cpt++;
        if(cpt == 8 && i != 31)
        {
            bin += ".";
            cpt = 0;
        }
    }
    return binAdresseToDecimal(bin);
}
#endif