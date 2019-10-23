$(document).ready(function() {
  $(document).change(function() {
    // Form Field Values
    projectDue = $("#projectDue").val();
    expectedHours = $("#expectedHours").val();
    notes = $("#notes").val();

    // Output Template

    $outputTemplate = `<table>
    <tbody>
      <tr>
        <td class="outputLabel">Project Due</td>
        <td class="outputValue">${projectDue}</td>
      </tr>
      <tr>
        <td class="outputLabel">Expected Hours</td>
        <td class="outputValue">${expectedHours}</td>
      </tr>
      <tr>
        <td class="outputLabel">Notes</td>
        <td class="outputValue">${notes}</td>
      </tr>
    </tbody>
  </table>`;

    $output = $("#outputInner").html($outputTemplate);
  });
});
