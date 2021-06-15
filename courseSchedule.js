/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where 
 * prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * 
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 */

var canFinish = function(numCourses, prerequisites) {
    //visualize will be our map of courses
    let visualize = {}
    let visiting = new Set()
    let visited = new Set()
    //Initialize the map with prereq as the key and an array of courses as the value.
    //This will allow us to see what courses route to prereq
    for(let courses of prerequisites) {
        let course = courses[0]
        let prereq = courses[1]
        if (prereq in visualize) {
            visualize[prereq].push(course)
        } else {
            visualize[prereq] = [course]
        }
    }
    //DFS Function
    let DFS = function(prereq) {
        //Start by adding the current course to visiting
        visiting.add(prereq)
        let courses = visualize[prereq]
        //This is important because if we currently visiting a non-prereq this will always be false
        if(courses) {
            //go through all the courses
            for (let course of courses) {
                //if we already visited this course we can continue. 
                if (visited.has(course)) continue
                //if visiting has the course we can return true.
                if (visiting.has(course)) return true;
                //Check if the course is cyclic. If we pass course and it is a prereq then we return true. Parent call will return false. 
                if (DFS(course)) return true
            }
        }
        //delete the current from visiting and add to visited
        visiting.delete(prereq)
        visited.add(prereq)
        return false
    };
    //call DFS function for every prereq. We return false if there is a cyclic nature to the prereqs. 
    for (let key of Object.keys(visualize)) {
        if(DFS(key)) return false
    }
    return true
};

console.log(canFinish(2, [[1,0]])) //True
console.log(canFinish(2, [[0, 1]])) //True
console.log(canFinish(2, [[1,0],[0,1]])) //False
console.log(canFinish(2, [[1,0],[2,0]])) //True
console.log(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])); //False


