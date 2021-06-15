var GetImportance = function(employees, id, total=0) {
    for (let i = 0; i < employees.length; i++) {
        let id1 = employees[i][0]
        let imp = employees[i][1]
        let sub = employees[i][2]
        
        if (id === id1) {
            total = imp; 
            if (sub.length > 0) {
                for (let j = 0; j < sub.length; j++) {
                    total += GetImportance(employees, sub[j], total)
                }
            }
        }    
    }
    return total
};

console.log(GetImportance([[1,5,[2,3]],[2,3,[]],[3,3,[]]], 1))