(function() {
    if(isExistSlaveryProcess)
    {
        $.each(persons, function(i, person)
        {
            if(person.colored)
            {
                $(person).remove();
            }
        }
    }
});
