function sandwich (...items: string[]){
    console.log(`Preparing sandwich with ${items.join(',')}.`)
}

sandwich('chicken', 'kechup');
sandwich('Potato', 'Mayo');
sandwich('egg');